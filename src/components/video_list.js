import React from 'react';
import './video_list.css';
import VideoListItem from './video_list_item';


const VideoList = (props) => {

  
  
    const VideoItems = props.videos.map( video => {
        return (
            <VideoListItem 
            key={video.etag} 
            video={video} 
            onVideoSelect={props.onVideoSelect} />  
        )
     })
    
    return(
      <ul className="VideoList">
       { VideoItems }
      </ul>
    );
};

export default VideoList;