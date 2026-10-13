import LabPreview from '@/app/lab-tests-preview/LabPreview';
import { getLabCatalog } from '@/lib/lab-catalog';
import { labInitialData, labStudyLinks } from '@/lib/lab-page-data';
import { LabDirectory } from '@/components/lab/LabSections';
export const dynamic = 'force-dynamic';
export default async function LabTestsPage() {
  const data = await getLabCatalog();
  return <main><LabPreview preview={false} initialData={labInitialData(data)} studyLinks={labStudyLinks()}><LabDirectory data={data}/></LabPreview></main>;
}
