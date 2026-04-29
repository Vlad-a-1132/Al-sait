import MammologyArticlePage, { makeMammologyArticleMetadata } from "@/components/articles/MammologyArticlePage";

export const metadata = makeMammologyArticleMetadata("kogda-stoit-obratitsya-k-mammologu");

export default function Page() {
  return <MammologyArticlePage slug="kogda-stoit-obratitsya-k-mammologu" />;
}
