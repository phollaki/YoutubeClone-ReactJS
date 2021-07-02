import React from "react";
import youtubeLogo from "../../assets/youtube-logo.png";
import styles from "./Header.module.css";
import MenuIcon from "@material-ui/icons/Menu";
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
import VoiceSearch from "./VoiceSearch";
import SearchInput from "./SearchInput";
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
        <VoiceSearch onShowHandler={showVoiceModalHandler} />
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
        <SearchInput />
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
          <Avatar src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/139221895_3400616756733639_3792665505054892108_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=2iHIbJGpqVwAX8XCGaw&_nc_ht=scontent-vie1-1.xx&oh=d1ef435eade4d2382670479961d14299&oe=60E34931" />
        </div>
      </div>
    </header>
  );
}

export default Header;
