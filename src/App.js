import { Fragment } from "react";
import styles from "./App.module.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import RecommendedVideos from "./components/layout/RecommendedVideos";
import { useSelector } from "react-redux";
import Search from "./components/layout/Search";
import { Redirect, Route, Switch } from "react-router-dom";
function App() {
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);

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
            {showSidebar && <Sidebar />}
            <RecommendedVideos />
          </Route>
          <Route path="/search">
            {showSidebar && <Sidebar />}
            <Search />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
