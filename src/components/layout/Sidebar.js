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
function Sidebar() {
  const sidebarState = useSelector((state) => state.sidebar.showSidebar);
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__upper}>
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={ExploreIcon} title="Explore" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscribtion" />
      </div>
      <div className={styles.sidebar__center}>
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpIcon} title="Liked Videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="See More" />
      </div>
      <div className={styles.sidebar__bottom}>
        <SidebarRow subscribers="Subscribes" />

        <SidebarRow
          channelName="Bob's channel"
          avatar="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98438484/original/b6d75e78a1805b5f44e2326556787bdae730c6ba/custom-made-youtube-avatar.jpg"
        />
      </div>
    </div>
  );
}

export default Sidebar;
