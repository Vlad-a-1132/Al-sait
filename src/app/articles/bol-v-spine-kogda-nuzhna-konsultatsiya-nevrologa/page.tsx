import NeurologyArticlePage, { makeNeurologyArticleMetadata } from "@/components/articles/NeurologyArticlePage";

export const metadata = makeNeurologyArticleMetadata("bol-v-spine-kogda-nuzhna-konsultatsiya-nevrologa");

export default function Page() {
  return <NeurologyArticlePage slug="bol-v-spine-kogda-nuzhna-konsultatsiya-nevrologa" />;
}
