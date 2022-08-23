import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import SingleArticle from "./components/SingleArticle";
import SingleTopic from "./components/SingleTopic";
import Topics from "./components/Topics";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic_slug" element={<SingleTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
