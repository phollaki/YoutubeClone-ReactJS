import React from "react";
import styles from "./RecommendedVideos.module.css";
import VideoCard from "./VideoCard";
function RecommendedVideos(props) {
  console.log("error");

  return (
    <div className={styles.recommendedVideos}>
      <h2>Recommended Videos</h2>
      <div className={styles.recommendedVideos__videos}>
        {props.videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            image={video.image}
            channelName={video.channelName}
            avatar={video.avatar}
            views={video.views}
            timestamp={video.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
