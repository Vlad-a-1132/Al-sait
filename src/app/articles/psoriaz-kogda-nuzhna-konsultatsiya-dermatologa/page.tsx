import DermatologyArticlePage, { makeDermatologyArticleMetadata } from "@/components/articles/DermatologyArticlePage";

export const metadata = makeDermatologyArticleMetadata("psoriaz-kogda-nuzhna-konsultatsiya-dermatologa");

export default function Page() {
  return <DermatologyArticlePage slug="psoriaz-kogda-nuzhna-konsultatsiya-dermatologa" />;
}
