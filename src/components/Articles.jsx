import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import styles from "../styles/Articles.module.css";

const Articles = () => {
  const [allArticles, SetAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      SetAllArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      <h2>All Articles</h2>
      <ul className={styles.articlesList}>
        {allArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <table>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <td>{article.title}</td>
                  </tr>
                  <tr>
                    <th>Author</th>
                    <td>{article.author}</td>
                  </tr>
                  <tr>
                    <th>Date Created</th>
                    <td>{article.created_at}</td>
                  </tr>
                  <tr>
                    <th>Topic</th>
                    <td>{article.topic}</td>
                  </tr>
                  <tr>
                    <th>Comments</th>
                    <td>{article.comment_count}</td>
                  </tr>
                  <tr>
                    <th>Votes</th>
                    <td>{article.votes}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
