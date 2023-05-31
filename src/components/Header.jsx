import React, { useState } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const [title, setTitle] = useState("");
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigator(`/videos/${title}`);
  };

  return (
    <nav className="header">
      <Link className="icons" to="/">
        <AiOutlineYoutube />
        Youtube
      </Link>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색"
          className="header__search"
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <div className="user">lee</div>
    </nav>
  );
}

export default Header;
