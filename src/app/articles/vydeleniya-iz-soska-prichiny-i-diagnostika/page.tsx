import MammologyArticlePage, { makeMammologyArticleMetadata } from "@/components/articles/MammologyArticlePage";

export const metadata = makeMammologyArticleMetadata("vydeleniya-iz-soska-prichiny-i-diagnostika");

export default function Page() {
  return <MammologyArticlePage slug="vydeleniya-iz-soska-prichiny-i-diagnostika" />;
}
