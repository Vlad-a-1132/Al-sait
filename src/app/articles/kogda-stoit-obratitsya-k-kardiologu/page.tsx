import CardiologyArticlePage, { makeCardiologyArticleMetadata } from "@/components/articles/CardiologyArticlePage";

export const metadata = makeCardiologyArticleMetadata("kogda-stoit-obratitsya-k-kardiologu");

export default function Page() {
  return <CardiologyArticlePage slug="kogda-stoit-obratitsya-k-kardiologu" />;
}
