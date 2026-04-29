import CardiologyArticlePage, { makeCardiologyArticleMetadata } from "@/components/articles/CardiologyArticlePage";

export const metadata = makeCardiologyArticleMetadata("ekg-kogda-nuzhno-delat-i-chto-pokazyvaet");

export default function Page() {
  return <CardiologyArticlePage slug="ekg-kogda-nuzhno-delat-i-chto-pokazyvaet" />;
}
