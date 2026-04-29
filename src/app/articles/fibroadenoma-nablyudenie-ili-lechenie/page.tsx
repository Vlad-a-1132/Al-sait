import MammologyArticlePage, { makeMammologyArticleMetadata } from "@/components/articles/MammologyArticlePage";

export const metadata = makeMammologyArticleMetadata("fibroadenoma-nablyudenie-ili-lechenie");

export default function Page() {
  return <MammologyArticlePage slug="fibroadenoma-nablyudenie-ili-lechenie" />;
}
