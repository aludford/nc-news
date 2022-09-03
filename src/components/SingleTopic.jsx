import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import ArticlesCollection from "./ArticlesCollection";
import ErrorPage from "./ErrorPage";

const SingleTopic = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();
  const [errAPI, setErrAPI] = useState(null);

  useEffect(() => {
    fetchArticlesByTopic(topic_slug)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrAPI(error.response);
      });
  }, [topic_slug]);

  if (isLoading) return <p>loading...</p>;

  if (errAPI) {
    return <ErrorPage errorRes={errAPI} />;
  }

  return (
    <div>
      <h2>{`${topic_slug} Articles`}</h2>
      <ArticlesCollection articles={articles} />
    </div>
  );
};

export default SingleTopic;
