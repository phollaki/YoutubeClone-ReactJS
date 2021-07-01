import React from "react";
import { Avatar } from "@material-ui/core";
import styles from "./VideoCard.module.css";
function VideoCard({ title, avatar, image, timestamp, views, channelName }) {
  return (
    <div className={styles.videoCard}>
      <img className={styles.videoCard__thumbnail} src={image} alt={image} />
      <div className={styles.videoCard__info}>
        <Avatar
          className={styles.videoCard__avatar}
          src={avatar}
          alt={channelName}
        />
        <div className={styles.videoCard__text}>
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} views • {timestamp} hours ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
