import { Fragment } from "react";
import styles from "./App.module.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import RecommendedVideos from "./components/layout/RecommendedVideos";
import { useSelector } from "react-redux";
function App() {
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main className={styles.app__body}>
        {showSidebar && <Sidebar />}
        <RecommendedVideos />
      </main>
    </Fragment>
  );
}

export default App;
