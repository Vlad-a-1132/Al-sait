import RehabilitationArticlePage, { makeRehabilitationArticleMetadata } from "@/components/articles/RehabilitationArticlePage";

const slug = "ozonoterapiya-kak-prohodit-protsedura";
export const metadata = makeRehabilitationArticleMetadata(slug);
export default function Page() { return <RehabilitationArticlePage slug={slug} />; }
