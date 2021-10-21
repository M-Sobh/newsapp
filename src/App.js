import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import ArticleInfo from "./components/ArticleInfo";
import Comments from "./components/Comments";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/articles">
          <ArticlesList />
        </Route>
        <Route exact path="/articles/:article_id">
          <ArticleInfo />
        </Route>
        <Route exact path="/articles/:article_id/comments">
          <Comments />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
