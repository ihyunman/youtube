import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import getVideos from "../api/getVideos";
import VideoCard from "../components/VideoCard";
import "./css/VideoDetail.css";
import VideoInfo from "../components/VideoInfo";
function VideoDetail() {
  const { data: videos } = useQuery(["videos", { keyword: " " }], getVideos, {
    retry: 0,
  });

  const video = useLocation().state;
  const { title, description, channelTitle, thumbnails } = video.snippet;

  const videoId =
    typeof video.id.videoId === undefined ? video.id.videoId : video.id;

  const [summary, setSummary] = useState("overview");

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
        <h2 className="video__detail--title">{title}</h2>
        <VideoInfo title={channelTitle} url={thumbnails.default.url} />
        <div className="video__detail--descWrap">
          <span
            className="video__detail--descBtn"
            onClick={() =>
              summary === "" ? setSummary("overview") : setSummary("")
            }
          >
            {summary === "overview" ? "자세히보기" : "간략히"}
          </span>
          <p className={`video__detail--desc ${summary}`}>{description}</p>
        </div>
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
