import NeurologyArticlePage, { makeNeurologyArticleMetadata } from "@/components/articles/NeurologyArticlePage";

export const metadata = makeNeurologyArticleMetadata("kogda-stoit-obratitsya-k-nevrologu");

export default function Page() {
  return <NeurologyArticlePage slug="kogda-stoit-obratitsya-k-nevrologu" />;
}
