import { v4 as uuid } from "uuid";
import React, { useContext, useState } from "react";

import { FeatureContext } from "../../../Context/FeatureContext";
import { useClickOutside } from "../../../CustomHook/useClickOutside";

export default function AddPlayListModal({ setModal }) {
  const { featureDispatch } = useContext(FeatureContext);

  const [playlistTitle, setplaylistitle] = useState("");
  const [playlistDescription, setplaylistDescription] = useState("");

  const submithandler = (e) => {
    featureDispatch({
      type: "ADD_NEW_PLAYLIST",
      payLoad: {
        _id: uuid(),
        title: playlistTitle,
        description: playlistDescription,
        videosId: []
      }
    });

    setplaylistDescription("");
    setplaylistitle("");
    setModal(false);
    e.stopPropagation();
  };

  return (
    <React.Fragment>
      <div className="ADDplaylist-container">
        <h3>Create a New Playlist</h3>
        <form onSubmit={submithandler}>
          <input
            type="text"
            placeholder="Enter Title Of Playlist"
            onChange={(e) => setplaylistitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Description of Playlist"
            onChange={(e) => setplaylistDescription(e.target.value)}
          />
          <button type="submit">Create a New PlayList</button>
        </form>
      </div>
    </React.Fragment>
  );
}
