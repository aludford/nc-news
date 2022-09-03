import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import SingleArticle from "./components/SingleArticle";
import SingleTopic from "./components/SingleTopic";
import Topics from "./components/Topics";
import Users from "./components/Users";
import { UserContext } from "./contexts/User";
import "./styles/App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  }); //given an initial user

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic_slug" element={<SingleTopic />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
