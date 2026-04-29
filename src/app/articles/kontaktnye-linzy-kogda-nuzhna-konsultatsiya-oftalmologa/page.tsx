import OphthalmologyArticlePage, {
  makeOphthalmologyArticleMetadata,
} from "@/components/articles/OphthalmologyArticlePage";

export const metadata = makeOphthalmologyArticleMetadata("kontaktnye-linzy-kogda-nuzhna-konsultatsiya-oftalmologa");

export default function Page() {
  return <OphthalmologyArticlePage slug="kontaktnye-linzy-kogda-nuzhna-konsultatsiya-oftalmologa" />;
}
