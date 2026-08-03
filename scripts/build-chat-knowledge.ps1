$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$downloads = Join-Path $env:USERPROFILE "Downloads"

function Get-RequiredFile {
  param([string] $Name)

  $path = Join-Path $downloads $Name
  if (-not (Test-Path -LiteralPath $path)) {
    throw "Required file not found: $path"
  }
  return (Resolve-Path -LiteralPath $path).Path
}

function ConvertTo-Text {
  param($Value)

  if ($null -eq $Value -or $Value -is [System.DBNull]) {
    return ""
  }
  return ([string]$Value).Trim()
}

function ConvertTo-Price {
  param([string] $Value)

  $clean = ($Value -replace "\s", "") -replace ",", "."
  if ($clean -match "^\d+(\.\d+)?$") {
    return [int][double]$clean
  }
  return $null
}

function Test-ServiceCode {
  param([string] $Value)

  return $Value -match "^[А-ЯA-Z]\d{2}(\.\d+)*" -or $Value -match "^[МM]\.\d+"
}

function Read-ExcelSheet {
  param(
    [string] $Path,
    [string] $ExtendedProperties
  )

  $connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=$Path;Extended Properties='$ExtendedProperties;HDR=NO;IMEX=1'"
  $connection = New-Object System.Data.OleDb.OleDbConnection($connectionString)
  $connection.Open()

  try {
    $schema = $connection.GetOleDbSchemaTable([System.Data.OleDb.OleDbSchemaGuid]::Tables, $null)
    $sheetRows = @($schema.Rows |
      Where-Object {
        $_.TABLE_NAME.Contains('$') -and
        $_.TABLE_NAME -notmatch "_FilterDatabase|Print_Area|ФильтрБазыДанн"
      })
    $sheetName = ($sheetRows | Where-Object { $_.TABLE_NAME -like "*Прейскурант*" } | Select-Object -First 1).TABLE_NAME
    if (-not $sheetName) {
      $sheetName = ($sheetRows | Select-Object -First 1).TABLE_NAME
    }

    if (-not $sheetName) {
      throw "No readable worksheet found in $Path"
    }

    $command = $connection.CreateCommand()
    $command.CommandText = "SELECT * FROM [$sheetName]"
    $adapter = New-Object System.Data.OleDb.OleDbDataAdapter($command)
    $table = New-Object System.Data.DataTable
    [void]$adapter.Fill($table)
    return ,$table
  }
  finally {
    $connection.Close()
  }
}

function Convert-PriceTable {
  param(
    [System.Data.DataTable] $Table,
    [string] $Source,
    [string] $RootCategory
  )

  $items = New-Object System.Collections.Generic.List[object]
  $category = $RootCategory

  foreach ($row in $Table.Rows) {
    $c0 = ConvertTo-Text $row.ItemArray[0]
    $c1 = if ($row.ItemArray.Count -gt 1) { ConvertTo-Text $row.ItemArray[1] } else { "" }
    $c2 = if ($row.ItemArray.Count -gt 2) { ConvertTo-Text $row.ItemArray[2] } else { "" }
    $price = ConvertTo-Price $c2

    if ($c0 -match "Код услуги" -or $c1 -match "Наименование|теста") {
      continue
    }

    if ($null -eq $price -or $price -le 0) {
      if ($c1 -and -not (Test-ServiceCode $c1) -and $c1 -notmatch "УТВЕРЖДАЮ|Генеральный директор|Лебедев") {
        $category = $c1
      }
      elseif ($c0 -and -not (Test-ServiceCode $c0) -and $c0 -notmatch "УТВЕРЖДАЮ|Генеральный директор|Лебедев") {
        $category = $c0
      }
      continue
    }

    $name = $c1
    if (-not $name) {
      continue
    }

    $items.Add([ordered]@{
      source = $Source
      category = $category
      code = $c0
      name = $name
      price = $price
    })
  }

  return $items
}

$priceFiles = @(
  @{
    Name = "Прейскурант стоматология 01.04.26 (2).xls"
    Source = "Стоматология 01.04.2026"
    RootCategory = "Стоматология"
    ExtendedProperties = "Excel 8.0"
  },
  @{
    Name = "АМБУЛАТОРИЯ 01.04.26 (3).xlsx"
    Source = "Амбулатория 01.04.2026"
    RootCategory = "Амбулаторные услуги"
    ExtendedProperties = "Excel 12.0 Xml"
  },
  @{
    Name = "ЛАБОРАТОРНЫЕ ИССЛЕДОВАНИЯ 01.04.26 (6).xlsx"
    Source = "Лабораторные исследования 01.04.2026"
    RootCategory = "Лабораторные исследования"
    ExtendedProperties = "Excel 12.0 Xml"
  }
)

$services = New-Object System.Collections.Generic.List[object]
foreach ($file in $priceFiles) {
  $path = Get-RequiredFile $file.Name
  $table = Read-ExcelSheet -Path $path -ExtendedProperties $file.ExtendedProperties
  $rows = Convert-PriceTable -Table $table -Source $file.Source -RootCategory $file.RootCategory
  foreach ($service in $rows) {
    $services.Add($service)
  }
}

$doctorsPath = Join-Path $root "doctors_data.json"
$doctorsJson = Get-Content -LiteralPath $doctorsPath -Raw -Encoding UTF8 | ConvertFrom-Json
$doctors = @(
  foreach ($doctor in $doctorsJson.doctors) {
    [ordered]@{
      name = $doctor.name
      slug = $doctor.slug
      specialization = $doctor.specialization
      specializations = $doctor.specializations
      schedule = $doctor.schedule
    }
  }
)

$knowledge = [ordered]@{
  generatedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:sszzz")
  clinic = [ordered]@{
    name = "Медицинский центр «Альтамед-С»"
    phone = "+7 (495) 255-44-50"
    email = "info@altamed-c.ru"
    hours = "Пн-Вс: 8:00-21:00"
    addresses = @(
      "г. Одинцово, бульвар Маршала Крылова, д. 23",
      "г. Одинцово, ул. Можайское шоссе, д. 141"
    )
  }
  doctors = $doctors
  services = $services
  sources = @(
    "https://altamed-c.ru/schedule",
    "Прейскурант стоматология 01.04.26 (2).xls",
    "АМБУЛАТОРИЯ 01.04.26 (3).xlsx",
    "ЛАБОРАТОРНЫЕ ИССЛЕДОВАНИЯ 01.04.26 (6).xlsx"
  )
}

$outputPath = Join-Path $root "data/chat-knowledge.json"
$json = $knowledge | ConvertTo-Json -Depth 20
[System.IO.File]::WriteAllText($outputPath, $json, [System.Text.UTF8Encoding]::new($false))

Write-Host "Wrote $outputPath"
Write-Host "Doctors: $($doctors.Count)"
Write-Host "Services: $($services.Count)"
