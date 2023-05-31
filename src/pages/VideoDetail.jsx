import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import getVideos from "../api/getVideos";
import VideoCard from "../components/VideoCard";
import "./VideoDetail.css";
function VideoDetail() {
  const { data: videos } = useQuery(["videos", "related"], getVideos, {
    retry: 0,
  });

  const video = useLocation().state;
  const { title, publishedAt, thumbnails, channelTitle, description } =
    video.snippet;

  const videoId = video.id.videoId;
  console.log(videoId);
  return (
    <div className="video__detail">
      <section className="video__detail--video">
        <div className="yVideo">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?controls=0`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <p className="video__detail--title">{title}</p>
        <p className="video__detail--desc">{description}</p>
      </section>
      <ul className="video__detail--list">
        {videos &&
          videos.map((video, index) => (
            <VideoCard key={index} video={video} type="related" />
          ))}
      </ul>
    </div>
  );
}

export default VideoDetail;
