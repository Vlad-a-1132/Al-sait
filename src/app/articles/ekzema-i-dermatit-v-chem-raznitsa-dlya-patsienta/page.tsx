import DermatologyArticlePage, { makeDermatologyArticleMetadata } from "@/components/articles/DermatologyArticlePage";

export const metadata = makeDermatologyArticleMetadata("ekzema-i-dermatit-v-chem-raznitsa-dlya-patsienta");

export default function Page() {
  return <DermatologyArticlePage slug="ekzema-i-dermatit-v-chem-raznitsa-dlya-patsienta" />;
}
