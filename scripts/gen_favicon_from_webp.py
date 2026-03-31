from __future__ import annotations

from pathlib import Path

from PIL import Image


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = root / "public" / "images" / "icons" / "S.webp"
    dst = root / "public" / "favicon.ico"

    if not src.exists():
        raise SystemExit(f"Source icon not found: {src}")

    img = Image.open(src).convert("RGBA")
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128)]
    first = img.resize(sizes[0], Image.LANCZOS)
    first.save(dst, format="ICO", sizes=sizes)

    print(f"Wrote {dst} from {src}")


if __name__ == "__main__":
    main()

