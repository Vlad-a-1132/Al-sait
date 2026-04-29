import OphthalmologyArticlePage, {
  makeOphthalmologyArticleMetadata,
} from "@/components/articles/OphthalmologyArticlePage";

export const metadata = makeOphthalmologyArticleMetadata("mushki-i-vspyshki-pered-glazami-kogda-eto-opasno");

export default function Page() {
  return <OphthalmologyArticlePage slug="mushki-i-vspyshki-pered-glazami-kogda-eto-opasno" />;
}
