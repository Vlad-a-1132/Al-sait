import MammologyArticlePage, { makeMammologyArticleMetadata } from "@/components/articles/MammologyArticlePage";

export const metadata = makeMammologyArticleMetadata("kak-podgotovitsya-k-priemu-mammologa");

export default function Page() {
  return <MammologyArticlePage slug="kak-podgotovitsya-k-priemu-mammologa" />;
}
