import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import ArticlesCollection from "./ArticlesCollection";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      <h2>All Articles</h2>
      <ArticlesCollection articles={articles} />
    </div>
  );
};

export default Articles;