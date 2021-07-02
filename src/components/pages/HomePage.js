import React, { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../layout/Sidebar";
import useHttp from "../hooks/use-http";
import { getAllVideos } from "../lib/api";
import RecommendedVideos from "../layout/RecommendedVideos";
function HomePage() {
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);
  const {
    sendRequest,
    status,
    data: loadedVideos,
    error,
  } = useHttp(getAllVideos, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  
  if (status === "pending") {
    return (
      <div className="centered focused">
        <p>status</p>
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedVideos || loadedVideos.length === 0)) {
    return <p>completed</p>;
  }
  return (
    <Fragment>
      {showSidebar && <Sidebar />}
      <RecommendedVideos videos={loadedVideos} />
    </Fragment>
  );
}

export default HomePage;
