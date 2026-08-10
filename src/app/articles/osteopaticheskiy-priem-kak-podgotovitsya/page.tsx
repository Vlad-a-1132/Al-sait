import RehabilitationArticlePage, { makeRehabilitationArticleMetadata } from "@/components/articles/RehabilitationArticlePage";

const slug = "osteopaticheskiy-priem-kak-podgotovitsya";
export const metadata = makeRehabilitationArticleMetadata(slug);
export default function Page() { return <RehabilitationArticlePage slug={slug} />; }
