import React from "react";
import styles from "./RecommendedVideos.module.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
  return (
    <div className={styles.recommendedVideos}>
      <h2>Recommended Videos</h2>
      <div className={styles.recommendedVideos__videos}>
        <VideoCard
          title="My life in 5 minutes"
          image="https://m.media-amazon.com/images/I/81rOhu4D0eL._SS500_.jpg"
          channelName="PHaki"
          avatar="https://p16-amd-va.tiktokcdn.com/musically-maliva-obj/1636324378321925~c5_300x300.jpeg?x-expires=1609447600&x-signature=iDjFDvL69vowaIFbuATa9FHXy0Z%3D"
          views="203E"
          timestamp="4"
        />
        <VideoCard
          title="How to make your youtube thumbnail"
          image="https://blog.creatopy.com/wp-content/uploads/2020/06/fonts-for-youtube.png"
          channelName="Tutorial World"
          avatar="data:image/png;base64,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"
          views="203E"
          timestamp="6"
        />
        <VideoCard
          title="Bear versus a Tiger"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Tm2fBzXzitDisDkZTLFQX2oKcYNeS5hoI1edfGr8swafpWPwLy7ctP2w8Fn1YByDEjM&usqp=CAU"
          channelName="Animal Planet"
          avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Animal_Planet_logo.svg/797px-Animal_Planet_logo.svg.png"
          views="23T"
          timestamp="2"
        />
        <VideoCard
          title="What you need to start your youtube career"
          image="https://www.tubics.com/wp-content/uploads/2020/01/maxresdefault-1-1-1024x576.jpg"
          channelName="Pin Van Norbert"
          avatar="https://i.pinimg.com/originals/94/24/bf/9424bf2d18248ad9f280342d46caead8.jpg"
          views="106"
          timestamp="23"
        />
        <VideoCard
          title="GAME SHOW"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfWn9mPUbQTx4XaxiJtikv7icr4eoVOJkK-NjQV5dCzbFwEKSKrNOpcRzcNrYQDDUy9ES695ePzjlDw&usqp=CAU"
          channelName="PiewDiePie"
          avatar="https://assets.4cdn.hu/kraken/6wj69qXZBs50FUAHs.jpeg?format=auto&width=380&height=253"
          views="23M"
          timestamp="2043"
        />
        <VideoCard
          title="Pool Volleyball, Worldie Saves, Foden's Backheel & Recovery 🔥 Inside Training | England"
          image="https://i.ytimg.com/vi/Jy2VnIiwKhE/maxresdefault.jpg"
          channelName="Soccer England"
          avatar="https://pbs.twimg.com/profile_images/1338913004751032321/UGvsqQL6.jpg"
          views="612T"
          timestamp="21"
        />
        <VideoCard
          title="Logan Paul want to beat me!"
          image="https://i.redd.it/oo1xsdpki7761.jpg"
          channelName="KSI Olajidebt"
          avatar="https://yt3.ggpht.com/ytc/AKedOLTNtWi13ujIRntu03WgZuFiCDJBFIXwf5406KOTWA=s900-c-k-c0x00ffffff-no-rj"
          views="23M"
          timestamp="2043"
        />
        <VideoCard
          title="UNPREDICTABLE Auditions That BLEW The Judges Away | X Factor Global"
          image="https://lh3.googleusercontent.com/proxy/DExDgWY5CcsXdsMMElxTxV5YfTIVbPSDhIZ5rJKziZp4HuTWDdBiE65MjLFrZ7TulVJwa3HlX5TVhI7SAheNSdxdc1-3Z7yET9BkMw3dx60029zh7iT9klCWpy6WV7bcZizRNzoxRZqc8gAHEOQ"
          channelName="X-Factor UK"
          avatar="https://www.techadvisor.com/cmsdata/features/3682800/the_x_factor_1_thumb800.jpg"
          views="121T"
          timestamp="11"
        />
        <VideoCard
          title="How to make best Homemade Pizza in only 20 minutes"
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png"
          channelName="FoodChart"
          avatar="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1590082480%2FGettyImages-945578702.jpg%3Fitok%3DzJRb8Xm5"
          views="1.2M"
          timestamp="311"
        />
        <VideoCard
          title="Best of Novak Djokovic (Funniest Moments, dance, best points)"
          image="https://i.ytimg.com/vi/kLoTwzUFqrU/hqdefault.jpg"
          channelName="TennisPoint"
          avatar="https://ichef.bbci.co.uk/news/640/cpsprodpb/E1A2/production/_105126775_tennis_bbc.jpg"
          views="36M"
          timestamp="44"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
