import MammologyArticlePage, { makeMammologyArticleMetadata } from "@/components/articles/MammologyArticlePage";

export const metadata = makeMammologyArticleMetadata("mammografiya-komu-i-kogda-nuzhna");

export default function Page() {
  return <MammologyArticlePage slug="mammografiya-komu-i-kogda-nuzhna" />;
}
