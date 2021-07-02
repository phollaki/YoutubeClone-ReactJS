import React from "react";
import styles from "./Sidebar.module.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moreBarActions from "../store/more-slice";
import { Fragment } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import youtubeLogo from "../../assets/youtube-logo.png";
import sidebarActions from "../store/sidebar-slice";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Modal from "../UI/Modal";
function Sidebar() {
  const dispatch = useDispatch();
  const moreBarState = useSelector((state) => state.morebar.showMore);
  const sidebarState = useSelector((state) => state.sidebar.showSidebar);

  const showCart = () => {
    if (!sidebarState) {
      dispatch(sidebarActions.actions.showSidebar());
    }
    if (sidebarState) {
      dispatch(sidebarActions.actions.hideSidebar());
    }
  };
  const showMoreHandler = () => {
    if (!moreBarState) {
      dispatch(moreBarActions.actions.showMore());
    }
    if (moreBarState) {
      dispatch(moreBarActions.actions.hideMore());
    }
  };
  return (
    <Modal cssStyle="sidebar">
      <div className={styles.sidebar}>
        <div className={styles.sidebar__top}>
          <MenuIcon className={styles.sidebar__topIcon} onClick={showCart} />
          <Link to="/homepage">
            <img src={youtubeLogo} alt="Youtube logo" />
          </Link>
        </div>
        <div className={styles.sidebar__upper}>
          <Link to="/homepage">
            <SidebarRow Icon={HomeIcon} title="Home" />
          </Link>
          <SidebarRow Icon={ExploreIcon} title="Explore" />
          <SidebarRow Icon={SubscriptionsIcon} title="Subscribtion" />
        </div>
        <div className={styles.sidebar__center}>
          <SidebarRow Icon={VideoLibraryIcon} title="Library" />
          <SidebarRow Icon={HistoryIcon} title="History" />
          <SidebarRow Icon={OndemandVideoIcon} title="Videos" />
          <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
          <SidebarRow Icon={ThumbUpIcon} title="Liked Videos" />
          <div onClick={showMoreHandler}>
            <SidebarRow Icon={ExpandMoreIcon} title="See More" />
          </div>

          {moreBarState && (
            <Fragment>
              <SidebarRow Icon={QueueMusicIcon} title="Liked Videos" />
              <SidebarRow Icon={PlaylistAddCheckIcon} title="Liked Videos" />
            </Fragment>
          )}
        </div>
        <div className={styles.sidebar__bottom}>
          <SidebarRow subscribers="Subscribes" />

          <SidebarRow
            channelName="Bob's channel"
            avatar="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98438484/original/b6d75e78a1805b5f44e2326556787bdae730c6ba/custom-made-youtube-avatar.jpg"
          />
        </div>
      </div>
    </Modal>
  );
}

export default Sidebar;
