import React from "react";
import styles from "./Search.module.css";
import { useSelector } from "react-redux";
import Sidebar from "../layout/Sidebar";
function Search() {
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);
  return <div className={styles.search}>{showSidebar && <Sidebar />}</div>;
}

export default Search;
