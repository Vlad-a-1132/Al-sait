import DermatologyArticlePage, { makeDermatologyArticleMetadata } from "@/components/articles/DermatologyArticlePage";

export const metadata = makeDermatologyArticleMetadata("akne-u-podrostkov-i-vzroslyh-kogda-idti-k-dermatologu");

export default function Page() {
  return <DermatologyArticlePage slug="akne-u-podrostkov-i-vzroslyh-kogda-idti-k-dermatologu" />;
}
