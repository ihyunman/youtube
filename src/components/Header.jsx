import { useEffect, useState } from "react";
import { AiOutlineYoutube, AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./css/Header.css";
import { useSearchAPI } from "../context/SearchAPI";

function Header() {
  const [title, setTitle] = useState("");
  const navigator = useNavigate();
  const { params } = useParams();
  const { setKeyword } = useSearchAPI();

  useEffect(() => {
    setTitle(params || "");
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(title);
    navigator(`/videos/${title}`);
  };

  const handleClick = () => {
    setKeyword("");
  };

  return (
    <nav className="header">
      <Link className="icons" to="/" onClick={handleClick}>
        <AiOutlineYoutube />
        Youtube
      </Link>
      <form className="header__search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색"
          className="header__search--input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <AiOutlineSearch className="header__search--btn" />
      </form>
      <div className="header__user">
        <BiUserCircle className="header__user--btn" />
      </div>
    </nav>
  );
}

export default Header;
