import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ArticlesList />
        </Route>
        <Route exact path="article">
          <Article />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
