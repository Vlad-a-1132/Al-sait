import OphthalmologyArticlePage, {
  makeOphthalmologyArticleMetadata,
} from "@/components/articles/OphthalmologyArticlePage";

export const metadata = makeOphthalmologyArticleMetadata("kogda-stoit-obratitsya-k-oftalmologu");

export default function Page() {
  return <OphthalmologyArticlePage slug="kogda-stoit-obratitsya-k-oftalmologu" />;
}
