import MammologyArticlePage, { makeMammologyArticleMetadata } from "@/components/articles/MammologyArticlePage";

export const metadata = makeMammologyArticleMetadata("proverka-grudi-posle-40-let");

export default function Page() {
  return <MammologyArticlePage slug="proverka-grudi-posle-40-let" />;
}
