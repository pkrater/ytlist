import React from "react";
import "./video_list_item.css";

const VideoListItem = ({ video, onVideoSelect }) => {
  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;
  const videoThumbnailUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="VideoListItem" onClick={()=>{onVideoSelect(video)}} >  
    <img className="VideoListItem-img" alt="{videoTitle}" src={videoThumbnailUrl} />
      <div className="VideoListItem-content">
        <h2 className="VideoListItem-title">{videoTitle}</h2>
        <div className="VideoListItem-description">{videoDescription}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
