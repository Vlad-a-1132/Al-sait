import CardiologyArticlePage, { makeCardiologyArticleMetadata } from "@/components/articles/CardiologyArticlePage";

export const metadata = makeCardiologyArticleMetadata("chto-vzyat-na-priem-k-kardiologu");

export default function Page() {
  return <CardiologyArticlePage slug="chto-vzyat-na-priem-k-kardiologu" />;
}
