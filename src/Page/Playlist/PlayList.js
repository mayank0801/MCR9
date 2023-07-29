import { useContext, useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FeatureContext } from "../../Context/FeatureContext";
import { useClickOutside } from "../../CustomHook/useClickOutside";
import AddPlayListModal from "./component/AddPlayListModal";
import { ImCross } from "react-icons/im";
import { getImage } from "../../Utlis/utlis";
import { DataContext } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";
export default function PlayList() {
  const { playlist, featureDispatch } = useContext(FeatureContext);
  const { videoData } = useContext(DataContext);
  const [modal, setModal] = useState(false);

  const modalref = useRef();

  const navigate = useNavigate();
  useClickOutside(modalref, setModal);
  return (
    <div>
      <h1>Playlist</h1>
      <div className="playlist-container">
        {playlist.map((detail) => {
          const playlIstThumbnail = getImage(videoData, detail.videosId[0]);

          return (
            <div
              className="playlist-cursor"
              key={detail._id}
              onClick={() => navigate(`/playlist/${detail._id}`)}
            >
              <p>
                {" "}
                <ImCross
                  onClick={() =>
                    featureDispatch({
                      type: "REMOVE_PLAYLIST",
                      payLoad: detail._id
                    })
                  }
                />
              </p>
              <img
                className="playlist-thumbnail"
                src={playlIstThumbnail}
                alt="playlist"
              />
              <h2>{detail.title}</h2>
              <p>{detail.description}</p>
            </div>
          );
        })}
        <div className="Add-playlist">
          <IoMdAddCircle size={40} onClick={() => setModal(true)} />
        </div>
      </div>

      {modal && (
        <div className="Modal-wrapper">
          <div className="Modal" ref={modalref}>
            <AddPlayListModal setModal={setModal} />
          </div>
        </div>
      )}
    </div>
  );
}
