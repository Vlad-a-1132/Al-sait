import CardiologyArticlePage, { makeCardiologyArticleMetadata } from "@/components/articles/CardiologyArticlePage";

export const metadata = makeCardiologyArticleMetadata("gipertonicheskiy-kriz-trevozhnye-simptomy");

export default function Page() {
  return <CardiologyArticlePage slug="gipertonicheskiy-kriz-trevozhnye-simptomy" />;
}
