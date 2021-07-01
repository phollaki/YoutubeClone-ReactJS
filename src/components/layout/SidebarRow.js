import React from "react";
import styles from "./SidebarRow.module.css";
import { Avatar } from "@material-ui/core";
function SidebarRow({ Icon, title, avatar, channelName, subscribers }) {
  return (
    <div className={styles.sidebarRow}>
      {subscribers && <h2 className={styles.subscribers}>{subscribers}</h2>}
      {avatar && <Avatar className={styles.channelIcon} src={avatar} />}
      {channelName && <h2 className={styles.channelName}>{channelName}</h2>}
      {Icon && <Icon className={styles.sidebarRow__icon} />}
      {title && <h2 className={styles.sidebarRow__title}>{title}</h2>}
    </div>
  );
}

export default SidebarRow;
