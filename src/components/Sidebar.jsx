import React from "react";
import "./css/Sidebar.css";
import { MdHomeFilled } from "react-icons/md";
import {
  SiYoutubeshorts,
  SiYoutubemusic,
  SiYoutubestudio,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleClick = (page) => {
    page === "ready" ? alert("준비중입니다.") : navigate(page);
  };

  return (
    <ul className="sidebar">
      <li onClick={() => handleClick("/")}>
        <MdHomeFilled />
        <span>홈</span>
      </li>
      <li onClick={() => handleClick("ready")}>
        <SiYoutubeshorts />
        <span>Shorts</span>
      </li>
      <li onClick={() => handleClick("ready")}>
        <SiYoutubestudio />
        <span>구독</span>
      </li>
      <li onClick={() => handleClick("ready")}>
        <SiYoutubemusic />
        <span>Youtube Music</span>
      </li>
    </ul>
  );
}

export default Sidebar;
