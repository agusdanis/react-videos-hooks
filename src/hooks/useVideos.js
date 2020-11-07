import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [totalResults, setTotalResults] = useState(0);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    // fetch API
    const response = await youtube.get("/search", {
      params: { q: "karaoke " + term },
    });
    //console.log("App.js: ", response);
    // console.log(this);

    setVideos(response.data.items);
    setTotalResults(response.data.pageInfo.totalResults);
  };

  return [videos, totalResults, search];
};

export default useVideos;
