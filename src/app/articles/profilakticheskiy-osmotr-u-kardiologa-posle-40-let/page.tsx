import CardiologyArticlePage, { makeCardiologyArticleMetadata } from "@/components/articles/CardiologyArticlePage";

export const metadata = makeCardiologyArticleMetadata("profilakticheskiy-osmotr-u-kardiologa-posle-40-let");

export default function Page() {
  return <CardiologyArticlePage slug="profilakticheskiy-osmotr-u-kardiologa-posle-40-let" />;
}
