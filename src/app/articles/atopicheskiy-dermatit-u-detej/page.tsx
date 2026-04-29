import DermatologyArticlePage, { makeDermatologyArticleMetadata } from "@/components/articles/DermatologyArticlePage";

export const metadata = makeDermatologyArticleMetadata("atopicheskiy-dermatit-u-detej");

export default function Page() {
  return <DermatologyArticlePage slug="atopicheskiy-dermatit-u-detej" />;
}
