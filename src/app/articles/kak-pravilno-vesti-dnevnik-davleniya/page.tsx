import CardiologyArticlePage, { makeCardiologyArticleMetadata } from "@/components/articles/CardiologyArticlePage";

export const metadata = makeCardiologyArticleMetadata("kak-pravilno-vesti-dnevnik-davleniya");

export default function Page() {
  return <CardiologyArticlePage slug="kak-pravilno-vesti-dnevnik-davleniya" />;
}
