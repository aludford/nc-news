import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import ArticlesCollection from "./ArticlesCollection";

const SingleTopic = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic_slug).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug]);

  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      <h2>{`${topic_slug} Articles`}</h2>
      <ArticlesCollection articles={articles} />
    </div>
  );
};

export default SingleTopic;
