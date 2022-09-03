import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import ArticlesCollection from "./ArticlesCollection";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles("created_at", "desc").then(({ articles }) => {
      let lastestArticles = [];
      for (let i = 0; i < 6; i++) {
        lastestArticles.push(articles[i]);
      }
      setArticles(lastestArticles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      <h2>Latest Articles</h2>
      <ArticlesCollection articles={articles} />
    </div>
  );
};

export default Home;
