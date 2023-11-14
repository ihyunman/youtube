import "./css/VideoInfo.css";

function VideoInfo({ title, url }) {
  return (
    <div className="video__detail--info">
      <img className="info__img" src={url} alt={title} />
      <span className="info__title">{title}</span>
      <button className="info__btn">구독</button>
    </div>
  );
}

export default VideoInfo;
