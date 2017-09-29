import React from "react";

import "./video_detail.css";

const videoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="VideoDetail">
      <iframe title="VideoFrame" src={videoUrl} />
    </div>
  );
};

export default videoDetail;
