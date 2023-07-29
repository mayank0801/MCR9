import { useContext, useState } from "react";
import { FeatureContext } from "../../../Context/FeatureContext";
import { AiFillDelete } from "react-icons/ai";
import AddPlayListModal from "../../Playlist/component/AddPlayListModal";
import { isInPlayList } from "../../../Utlis/utlis";

export default function PlaylistFeat({ video }) {
  const { playlist, featureDispatch } = useContext(FeatureContext);
  const [PlayListModal, setPlayListModal] = useState(false);
  return (
    <div className="addplaylist-container">
      <h3>Add To PlayList</h3>
      {playlist.map((playlistDetail) => (
        <div className="addPlaylist-item" key={playlistDetail?._id}>
          <span>
            <label>
              <input
                type="checkbox"
                checked={isInPlayList(playlist, playlistDetail._id, video._id)}
                onChange={(e) => {
                  featureDispatch({
                    type: "PLAYLIST_VIDEO_HANDLER",
                    payLoad: {
                      isADD: e.target.checked,
                      playListId: playlistDetail._id,
                      videoId: video._id
                    }
                  });
                }}
              />
              <strong> {playlistDetail?.title}</strong>
            </label>
            <AiFillDelete
              onClick={() =>
                featureDispatch({
                  type: "REMOVE_PLAYLIST",
                  payLoad: playlistDetail._id
                })
              }
            />
          </span>
        </div>
      ))}

      <button onClick={() => setPlayListModal(!PlayListModal)}>
        Create A New PlayList
      </button>

      {PlayListModal && (
        <div className="Modal-wrapper">
          <div className="Modal">
            <AddPlayListModal setModal={setPlayListModal} />
          </div>
        </div>
      )}
    </div>
  );
}
