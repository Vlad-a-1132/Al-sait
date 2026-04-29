import OphthalmologyArticlePage, {
  makeOphthalmologyArticleMetadata,
} from "@/components/articles/OphthalmologyArticlePage";

export const metadata = makeOphthalmologyArticleMetadata("osmotr-glaz-pri-sakharnom-diabete");

export default function Page() {
  return <OphthalmologyArticlePage slug="osmotr-glaz-pri-sakharnom-diabete" />;
}
