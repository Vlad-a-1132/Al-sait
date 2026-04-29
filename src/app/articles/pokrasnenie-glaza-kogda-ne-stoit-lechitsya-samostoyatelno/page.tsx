import OphthalmologyArticlePage, {
  makeOphthalmologyArticleMetadata,
} from "@/components/articles/OphthalmologyArticlePage";

export const metadata = makeOphthalmologyArticleMetadata("pokrasnenie-glaza-kogda-ne-stoit-lechitsya-samostoyatelno");

export default function Page() {
  return <OphthalmologyArticlePage slug="pokrasnenie-glaza-kogda-ne-stoit-lechitsya-samostoyatelno" />;
}
