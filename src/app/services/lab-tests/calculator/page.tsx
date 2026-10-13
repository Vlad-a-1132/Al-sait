import LabPreview from '@/app/lab-tests-preview/LabPreview';
import { getLabCatalog } from '@/lib/lab-catalog';
import { labInitialData, labStudyLinks } from '@/lib/lab-page-data';
export const dynamic = 'force-dynamic';
export default async function LabCalculatorPage() {
  const data = await getLabCatalog();
  return <main><LabPreview preview={false} calculator initialData={labInitialData(data)} studyLinks={labStudyLinks()}/></main>;
}
