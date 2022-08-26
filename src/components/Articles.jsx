import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticlesCollection from "./ArticlesCollection";
import styles from "../styles/Articles.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("created_at");
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    fetchArticles(searchParams.get("sort_by"), searchParams.get("order")).then(
      ({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      }
    );
  }, [searchParams]);

  if (isLoading) return <p>loading...</p>;

  const handleSortByClick = (event) => {
    setSearchParams({ sort_by: event.target.name, order: sortOrder });
    setSortBy(event.target.name);
  };

  const handleOrderByClick = (event) => {
    setSearchParams({
      sort_by: sortBy,
      order: sortOrder === "desc" ? "asc" : "desc",
    });
    setSortOrder((currSortOrder) => {
      return currSortOrder === "desc" ? "asc" : "desc";
    });
  };

  const displayNames = {
    created_at: "Date",
    votes: "Votes",
    comment_count: "Number of Comments",
  };

  return (
    <div>
      <h2>All Articles</h2>
      <p>
        Sorted by {displayNames[sortBy]} in {sortOrder} order
      </p>
      <button
        className={styles.btn}
        name="created_at"
        onClick={handleSortByClick}
      >
        Sort By Date
      </button>
      <button
        className={styles.btn}
        name="comment_count"
        onClick={handleSortByClick}
      >
        Sort By Comments
      </button>
      <button className={styles.btn} name="votes" onClick={handleSortByClick}>
        Sort By Votes
      </button>
      <button
        className={styles.orderByBtn}
        name="order"
        onClick={handleOrderByClick}
      >
        Order Asc/Desc
      </button>
      <ArticlesCollection articles={articles} />
    </div>
  );
};

export default Articles;
