import CardiologyArticlePage, { makeCardiologyArticleMetadata } from "@/components/articles/CardiologyArticlePage";

export const metadata = makeCardiologyArticleMetadata("povyshennoe-davlenie-kogda-nuzhen-vrach");

export default function Page() {
  return <CardiologyArticlePage slug="povyshennoe-davlenie-kogda-nuzhen-vrach" />;
}
