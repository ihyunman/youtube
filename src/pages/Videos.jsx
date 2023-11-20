import VideoCard from "../components/VideoCard";
import "./css/Videos.css";
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

  return (
    <ul className="videos">
      {videos &&
        videos.map((video) => {
          return <VideoCard key={video.id} video={video} type="popular" />;
        })}
    </ul>
  );
}

export default Videos;
