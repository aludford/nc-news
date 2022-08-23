import styles from "../styles/ArticlesCollection.module.css";
import { Link } from "react-router-dom";

const ArticlesCollection = (props) => {
  return (
    <ul className={styles.articlesList}>
      {props.articles.map((article) => {
        return (
          <li key={article.article_id}>
            <table className={styles.articleTable}>
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>
                    <Link to={`/articles/${article.article_id}`}>
                      {article.title}
                    </Link>
                  </td>
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
                  <td>
                    <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
                  </td>
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
  );
};

export default ArticlesCollection;
