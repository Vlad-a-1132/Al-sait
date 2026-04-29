import OphthalmologyArticlePage, {
  makeOphthalmologyArticleMetadata,
} from "@/components/articles/OphthalmologyArticlePage";

export const metadata = makeOphthalmologyArticleMetadata("suhost-i-ustalost-glaz-kogda-nuzhen-vrach");

export default function Page() {
  return <OphthalmologyArticlePage slug="suhost-i-ustalost-glaz-kogda-nuzhen-vrach" />;
}
