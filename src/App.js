import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";

function App() {
  return (
    <Switch>
      <div className="App">
        <Header />
        <Route exact path="/">
          <ArticlesList />
        </Route>
        <Route exact path="/article">
          <Article />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
