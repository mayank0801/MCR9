import { useContext } from "react";
import { MdWatchLater } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FeatureContext } from "../Context/FeatureContext";
import { isWatchLater } from "../Utlis/utlis";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { _id, thumbnail, src, creator, views, title } = video;
  const { watchlater, featureDispatch } = useContext(FeatureContext);

  const navigate = useNavigate();
  return (
    <div className="video-card" onClick={() => navigate(`/video/${_id}`)}>
      <div>
        <div className="icons-watchlater">
          {isWatchLater(watchlater, _id) ? (
            <MdWatchLater
              size={20}
              color={"blue"}
              onClick={(e) => {
                e.stopPropagation();
                featureDispatch({
                  type: "REMOVE_FROM_WATCHLATER",
                  payLoad: _id
                });
              }}
            />
          ) : (
            <MdOutlineWatchLater
              size={20}
              color={"blue"}
              onClick={(e) => {
                e.stopPropagation();
                featureDispatch({
                  type: "ADD_TO_WATCHLATER",
                  payLoad: video
                });
              }}
            />
          )}
        </div>
        <img src={thumbnail} alt="thumbnail" />
        <div className="video-info">
          <img
            className="creator-image"
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            }
            alt="creator-imga"
          />
          <div className="video-deatil">
            <p>{title}</p>
            <p>
              {views} views | {creator}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
