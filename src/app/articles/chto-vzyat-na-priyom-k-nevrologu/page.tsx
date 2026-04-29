import NeurologyArticlePage, { makeNeurologyArticleMetadata } from "@/components/articles/NeurologyArticlePage";

export const metadata = makeNeurologyArticleMetadata("chto-vzyat-na-priyom-k-nevrologu");

export default function Page() {
  return <NeurologyArticlePage slug="chto-vzyat-na-priyom-k-nevrologu" />;
}
