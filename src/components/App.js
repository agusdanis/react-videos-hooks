import React, { useState, useEffect } from "react";
// import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  
  //VIDEOS
  const [videos, totalResults, search] = useVideos('koplo');
  
  // SELECTING VIDEOS
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            Found: {videos.length} of {totalResults} videos
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
