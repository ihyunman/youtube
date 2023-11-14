import "./css/VideoCard.css";
import { useNavigate } from "react-router-dom";
import formatDate from "../util/date";
function VideoCard({ video, type }) {
  const classType = type === "popular" ? "video" : "videor";
  const { title, publishedAt, thumbnails, channelTitle } = video.snippet;
  const navigator = useNavigate();

  const handleClick = () => {
    navigator(
      `/videos/watch/${video.id.videoId ? video.id.videoId : video.id}`,
      {
        state: video,
      }
    );
  };
  return (
    <li className={`${classType}`} onClick={handleClick}>
      <img
        className={`${classType}__img`}
        src={thumbnails.default.url}
        alt={title}
      />
      <div className={`${classType}__info`}>
        <p className={`${classType}__title`}>{title}</p>
        <p className={`${classType}__channel`}>{channelTitle}</p>
        <p className={`${classType}__publish`}>{formatDate(publishedAt)}</p>
      </div>
    </li>
  );
}

export default VideoCard;
