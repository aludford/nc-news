import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../api";
import styles from "../styles/Topics.module.css";

const Topics = () => {
  const [topics, setTopics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopics(topics);
      console.log(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      {topics.map((topics) => {
        return (
          <div key={topics.slug}>
            <Link to={`/topics/${topics.slug}`} className={styles.topics}>
              <h3>{topics.slug}</h3>
              <p>{topics.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
