import ArticleCardList from "@/components/article-card-list";
import { siteDescription, siteShortDescription } from "@/constants/site";
import { getAllArticles } from "@/utils/blog";
import { ArticleVisibility } from "@/utils/blog/article";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default async function Page() {
  const articles = await getAllArticles();
  const recentlyArticles = articles
    .filter(article => article.visibility === ArticleVisibility.Public)
    .toSorted((a, b) => b.publishedTimestamp - a.publishedTimestamp);

  return (
    <Stack spacing={2}>
      <Typography component="h1" variant="h5">{siteShortDescription}</Typography>
      <Typography>{siteDescription}</Typography>
      <ArticleCardList articles={recentlyArticles} />
    </Stack>
  );
}