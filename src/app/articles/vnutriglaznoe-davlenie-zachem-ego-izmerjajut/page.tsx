import OphthalmologyArticlePage, {
  makeOphthalmologyArticleMetadata,
} from "@/components/articles/OphthalmologyArticlePage";

export const metadata = makeOphthalmologyArticleMetadata("vnutriglaznoe-davlenie-zachem-ego-izmerjajut");

export default function Page() {
  return <OphthalmologyArticlePage slug="vnutriglaznoe-davlenie-zachem-ego-izmerjajut" />;
}
