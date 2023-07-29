import React, { useContext, useState } from "react";
import VideoCard from "../../Component/VideoCard";
import { DataContext } from "../../Context/DataContext";
import { filterVideoByTitle } from "../../Utlis/utlis";

export default function Explore() {
  const { videoData } = useContext(DataContext);
  const [searchInput, setSearchInput] = useState("");
  const filteredData = filterVideoByTitle(videoData, searchInput);
  return (
    <React.Fragment>
      <h1>Explore</h1>
      <input
        className="searchInput"
        type="text"
        placeholder=" Search Video By Title "
        onChange={(e) => setSearchInput(e.target.value.trim())}
      />
      <div className="video-card-container">
        {filteredData.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </React.Fragment>
  );
}
