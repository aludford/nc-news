import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.noBullets}>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
