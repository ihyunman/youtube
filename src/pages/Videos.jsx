import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import "./Videos.css";
import { useQuery } from "@tanstack/react-query";
import getVideos from "../api/getVideos";

function Videos() {
  const { status, data: videos } = useQuery(["videos", "popular"], getVideos, {
    staleTime: 1000 * 5 * 60,
    retry: 0,
  });

  return (
    <ul className="videos">
      {videos &&
        videos.map((video, index) => (
          <VideoCard key={index} video={video} type="popular" />
        ))}
    </ul>
  );
}

export default Videos;
