import React from "react";
// import ReactPlayer from "react-player";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            title="video player"
            src={videoSrc}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          {/* <ReactPlayer
            url={videoSrc}
            playing={true}
          ></ReactPlayer> */}
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
