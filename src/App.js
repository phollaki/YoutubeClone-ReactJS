import { Fragment } from "react";
import styles from "./App.module.css";
import Header from "./components/layout/Header";
import Search from "./components/pages/Search";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main className={styles.app__body}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/homepage" />
          </Route>
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
