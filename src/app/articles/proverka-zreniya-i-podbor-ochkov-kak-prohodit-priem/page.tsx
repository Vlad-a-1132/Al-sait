import OphthalmologyArticlePage, {
  makeOphthalmologyArticleMetadata,
} from "@/components/articles/OphthalmologyArticlePage";

export const metadata = makeOphthalmologyArticleMetadata("proverka-zreniya-i-podbor-ochkov-kak-prohodit-priem");

export default function Page() {
  return <OphthalmologyArticlePage slug="proverka-zreniya-i-podbor-ochkov-kak-prohodit-priem" />;
}
