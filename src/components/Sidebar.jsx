import React from "react";
import "./css/Sidebar.css";
import { MdHomeFilled } from "react-icons/md";
import {
  SiYoutubeshorts,
  SiYoutubemusic,
  SiYoutubestudio,
} from "react-icons/si";

function Sidebar() {
  return (
    <ul className="sidebar">
      <li>
        <MdHomeFilled />
        <span>홈</span>
      </li>
      <li>
        <SiYoutubeshorts />
        <span>Shorts</span>
      </li>
      <li>
        <SiYoutubestudio />
        <span>구독</span>
      </li>
      <li>
        <SiYoutubemusic />
        <span>Youtube Music</span>
      </li>
    </ul>
  );
}

export default Sidebar;
