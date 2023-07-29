import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/Navbar";
import HomePage from "./Page/HomePage/HomePage";
import CategoryVideoListing from "./Page/CategoryVideoListing/CategoryVideoListing";

import "./styles.css";
import Explore from "./Page/Explore/Explore";
import WatchLater from "./Page/WatchLater/WatchLater";
import PlayList from "./Page/Playlist/PlayList";
import SingleVideo from "./Page/SingleVideo/SingleVideo";
import PlayListVideo from "./Page/PlaylistVideo/PlayListVideo";

export default function App() {
  return (
    <div className="App">
      <aside>
        <NavBar />
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<CategoryVideoListing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/video/:videoId" element={<SingleVideo />} />
          <Route path="/playlist/:playlistId" element={<PlayListVideo />} />
        </Routes>
      </main>
    </div>
  );
}
