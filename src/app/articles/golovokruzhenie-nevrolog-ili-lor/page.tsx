import NeurologyArticlePage, { makeNeurologyArticleMetadata } from "@/components/articles/NeurologyArticlePage";

export const metadata = makeNeurologyArticleMetadata("golovokruzhenie-nevrolog-ili-lor");

export default function Page() {
  return <NeurologyArticlePage slug="golovokruzhenie-nevrolog-ili-lor" />;
}
