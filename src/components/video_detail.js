import React from 'react';

const videoDetail = ({video}) => {

    

    if (!video) {
        return (
            <div>Loading...</div>
        )
    }
    
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;  

    return (
    <div className="VideoDetail">
    <iframe title="VideoFrame" src={videoUrl}></iframe>
    </div>
    );
}
 
export default videoDetail;


