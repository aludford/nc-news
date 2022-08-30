import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { UserContext } from "../contexts/User";
import styles from "../styles/Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading...</p>;

  const handleLoginClick = (event) => {
    const avatar =
      users[users.findIndex((obj) => obj.username === event.target.value)]
        .avatar_url;
    setLoggedInUser({ username: event.target.value, avatar_url: avatar });
  };

  return (
    <div>
      <h2>All Users</h2>
      {users.map((user) => {
        return (
          <div className={styles.userDiv} key={user.username}>
            <ul className={styles.usernameList}>
              <li>
                <h3>Username:</h3>
                <p>{user.username}</p>
              </li>
              <li>
                <h3>Name:</h3>
                <p>{user.name}</p>
              </li>
              <li>
                <button onClick={handleLoginClick} value={user.username}>
                  Login
                </button>
              </li>
            </ul>
            <div className={styles.avatar}>
              <img src={user.avatar_url} alt="avatar" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
