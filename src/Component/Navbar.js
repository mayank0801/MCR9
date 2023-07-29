import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="nav-container">
      <NavLink className="navitem" to="/">
        <AiFillHome />
        <span>Home</span>
      </NavLink>

      <NavLink className="navitem" to="/explore">
        <MdExplore />
        <span>Explore</span>
      </NavLink>

      <NavLink className="navitem" to="/playlist">
        <MdPlaylistAdd />
        <span>Playlist</span>
      </NavLink>

      <NavLink className="navitem" to="/watchlater">
        <MdWatchLater />
        <span>Watch Later</span>
      </NavLink>
    </div>
  );
}
