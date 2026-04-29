import DermatologyArticlePage, { makeDermatologyArticleMetadata } from "@/components/articles/DermatologyArticlePage";

export const metadata = makeDermatologyArticleMetadata("kogda-stoit-obratitsya-k-dermatologu");

export default function Page() {
  return <DermatologyArticlePage slug="kogda-stoit-obratitsya-k-dermatologu" />;
}
