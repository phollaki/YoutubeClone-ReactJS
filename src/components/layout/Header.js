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
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";
import voiceModalActions from "../store/voice-slice";
import ClearIcon from "@material-ui/icons/Clear";
function Header() {
  const dispatch = useDispatch();
  const voiceModalState = useSelector(
    (state) => state.voiceModal.showVoiceModal
  );
  const sidebarState = useSelector((state) => state.sidebar.showSidebar);

  const showSidebar = () => {
    if (!sidebarState) {
      dispatch(sidebarActions.actions.showSidebar());
    }
    if (sidebarState) {
      dispatch(sidebarActions.actions.hideSidebar());
    }
  };
  const showVoiceModalHandler = () => {
    if (voiceModalState) {
      dispatch(voiceModalActions.actions.hideVoiceModal());
    }
    if (!voiceModalState) {
      dispatch(voiceModalActions.actions.showVoiceModal());
    }
  };
  if (voiceModalState) {
    return (
      <Modal cssStyle="voiceSearch">
        <ClearIcon
          onClick={showVoiceModalHandler}
          style={{ cursor: "pointer", marginLeft: "95%" }}
        />
        <h2>Voice Search</h2>
        <p>
          For voice search, open your browser settings and allow access to your
          microphone
        </p>
        <div className="microphone">
          <MicIcon
            style={{
              fontSize: "50px",
              backgroundColor: "grey",
              padding: "10px",
              borderRadius: "55px",
              marginLeft: "40%",
              marginRight: "50%",
              marginTop: "70px",
              cursor: "pointer",
            }}
          />
        </div>
      </Modal>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <MenuIcon onClick={showSidebar} />
        <Link to="/homepage">
          <img src={youtubeLogo} alt="Youtube logo" />
        </Link>
      </div>
      <div className={styles.header__center}>
        <div className={styles.header__center__option__search}>
          <input placeholder="Keresés"></input>
          <Link to="/search">
            <SearchIcon className={styles.searchIcon} />
          </Link>
        </div>
        <div className={styles.header__center__option}>
          <MicIcon onClick={showVoiceModalHandler} />
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
