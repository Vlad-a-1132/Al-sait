import RehabilitationArticlePage, { makeRehabilitationArticleMetadata } from "@/components/articles/RehabilitationArticlePage";

const slug = "detskiy-osteopat-kak-prohodit-priem";
export const metadata = makeRehabilitationArticleMetadata(slug);
export default function Page() { return <RehabilitationArticlePage slug={slug} />; }
