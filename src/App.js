import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
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
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
