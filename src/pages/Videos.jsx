import React, { useEffect } from "react";
import VideoCard from "../components/VideoCard";
import "./Videos.css";
import { useQuery } from "@tanstack/react-query";
import getVideos from "../api/getVideos";
import { useSearchAPI } from "../context/SearchAPI";

function Videos() {
  const { keyword } = useSearchAPI();

  const { data: videos } = useQuery(
    ["videos", "popular", { keyword }],
    getVideos,
    {
      staleTime: 1000 * 5 * 60,
      retry: 0,
    }
  );

  console.log("enter");

  return (
    <ul className="videos">
      {videos &&
        videos.map((video, index) => {
          if (keyword.length > 0 && video.snippet.title.includes(keyword)) {
            return <VideoCard key={index} video={video} type="popular" />;
          } else {
            return <VideoCard key={index} video={video} type="popular" />;
          }
        })}
    </ul>
  );
}

export default Videos;
