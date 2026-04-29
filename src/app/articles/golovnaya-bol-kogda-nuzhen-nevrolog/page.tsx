import NeurologyArticlePage, { makeNeurologyArticleMetadata } from "@/components/articles/NeurologyArticlePage";

export const metadata = makeNeurologyArticleMetadata("golovnaya-bol-kogda-nuzhen-nevrolog");

export default function Page() {
  return <NeurologyArticlePage slug="golovnaya-bol-kogda-nuzhen-nevrolog" />;
}
