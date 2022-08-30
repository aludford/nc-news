import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <section className={styles.navSection}>
      <nav>
        <ul className={styles.navMenu}>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.currentUser}>
        <div className={styles.avatar}>
          <img src={loggedInUser.avatar_url} alt="profile" />
        </div>
        <h3>{loggedInUser.username}</h3>
      </div>
    </section>
  );
};

export default Navigation;
