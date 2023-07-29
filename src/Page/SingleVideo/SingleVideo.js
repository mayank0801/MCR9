import { useContext, useRef, useState } from "react";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import { FeatureContext } from "../../Context/FeatureContext";
import { isWatchLater } from "../../Utlis/utlis";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import PlaylistFeat from "./feature/Playlist";
import Addnote from "./feature/Addnote";
import { AiFillDelete } from "react-icons/ai";
import { useClickOutside } from "../../CustomHook/useClickOutside";

export default function SingleVideo() {
  const { videoId } = useParams();
  const { videoData, dispatch } = useContext(DataContext);
  const { watchlater, featureDispatch } = useContext(FeatureContext);
  const videoDeatil = videoData.find(({ _id }) => _id == videoId);

  const [playlistModal, setPlaylistModal] = useState(false);
  const [AddNoteModal, setAddNoteModal] = useState(false);
  console.log(videoDeatil, "videoDetail");
  // const modalRef = useRef();
  // const modalRefAdd = useRef();
  // useClickOutside(modalRef, setPlaylistModal);
  // useClickOutside(modalRefAdd, setAddNoteModal);
  return (
    <div className="singleVideo_page">
      <h1>SingleVideo</h1>
      <main>
        <div>
          <iframe
            width="100%"
            height="500px"
            src={videoDeatil?.src}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="video-detail">
            <div className="video-info">
              <img
                className="creator-image"
                src={
                  "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                }
                alt="creator-imga"
              />
              <span>
                <strong>
                  {" "}
                  {videoDeatil?.title} by {videoDeatil?.creator}
                </strong>
              </span>
            </div>
            <div className="video-features">
              <span>
                {isWatchLater(watchlater, videoDeatil?._id) ? (
                  <MdWatchLater
                    size={20}
                    color={"blue"}
                    onClick={() =>
                      featureDispatch({
                        type: "REMOVE_FROM_WATCHLATER",
                        payLoad: videoDeatil?._id
                      })
                    }
                  />
                ) : (
                  <MdOutlineWatchLater
                    size={20}
                    color={"blue"}
                    onClick={() =>
                      featureDispatch({
                        type: "ADD_TO_WATCHLATER",
                        payLoad: videoDeatil
                      })
                    }
                  />
                )}
              </span>
              <span>
                <MdOutlinePlaylistAdd
                  size={30}
                  onClick={() => setPlaylistModal(!playlistModal)}
                />
              </span>
              <span>
                <AiTwotoneEdit
                  size={23}
                  onClick={() => setAddNoteModal(!AddNoteModal)}
                />
              </span>
              {/* <div ref={modalRef}> */}
              {playlistModal && (
                <div className="playlist-modal">
                  <PlaylistFeat video={videoDeatil} />
                </div>
              )}
              {/* </div> */}

              {/* <div ref={modalRefAdd}> */}
              {AddNoteModal && (
                <div className="playlist-modal">
                  <Addnote videoId={videoId} setModal={setAddNoteModal} />
                </div>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div>
          <h2>Add Note</h2>
          {videoDeatil.notes.map((note) => (
            <div key={note._id}>
              <p>{note?.note}</p>
              <span>
                <AiFillDelete
                  onClick={dispatch({
                    type: "REMOVE_NOTE",
                    payLoad: {
                      NoteId: note?._id,
                      videoId: videoId
                    }
                  })}
                />
              </span>
            </div>
          ))}
        </div>
      </main>

      <aside></aside>
    </div>
  );
}
