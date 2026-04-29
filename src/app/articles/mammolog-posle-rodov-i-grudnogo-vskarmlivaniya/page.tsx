import MammologyArticlePage, { makeMammologyArticleMetadata } from "@/components/articles/MammologyArticlePage";

export const metadata = makeMammologyArticleMetadata("mammolog-posle-rodov-i-grudnogo-vskarmlivaniya");

export default function Page() {
  return <MammologyArticlePage slug="mammolog-posle-rodov-i-grudnogo-vskarmlivaniya" />;
}
