import MammologyArticlePage, { makeMammologyArticleMetadata } from "@/components/articles/MammologyArticlePage";

export const metadata = makeMammologyArticleMetadata("kista-molochnoj-zhelezy-chto-vazhno-znat");

export default function Page() {
  return <MammologyArticlePage slug="kista-molochnoj-zhelezy-chto-vazhno-znat" />;
}
