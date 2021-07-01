import React from "react";
import youtubeLogo from "../../assets/youtube-logo.png";
import styles from "./Header.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import sidebarActions from "../store/sidebar-slice";
function Header() {
  const dispatch = useDispatch();
  const sidebarState = useSelector((state) => state.sidebar.showSidebar);

  const showCart = () => {
    if (!sidebarState) {
      dispatch(sidebarActions.actions.showSidebar());
    }
    if (sidebarState) {
      dispatch(sidebarActions.actions.hideSidebar());
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <MenuIcon onClick={showCart} />
        <img src={youtubeLogo} alt="Youtube logo" />
      </div>
      <div className={styles.header__center}>
        <div className={styles.header__center__option__search}>
          <input placeholder="Keresés"></input>
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.header__center__option}>
          <MicIcon />
        </div>
      </div>
      <div className={styles.header__right}>
        <div>
          <VideoCallIcon />
        </div>
        <div>
          <AppsIcon />
        </div>
        <div>
          <NotificationsIcon />
        </div>
        <div>
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
