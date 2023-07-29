import { useContext } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../../Component/VideoCard";
import { DataContext } from "../../Context/DataContext";
import { FeatureContext } from "../../Context/FeatureContext";
import { getVideo } from "../../Utlis/utlis";
import { ImCross } from "react-icons/im";

export default function PlayListVideo() {
  const { playlistId } = useParams();
  const { playlist, featureDispatch } = useContext(FeatureContext);
  const { videoData } = useContext(DataContext);
  const playlistDetail = playlist.find((list) => list._id == playlistId);
  const playlistVideoId = playlistDetail?.videosId;
  return (
    <>
      <h1 className="pageTitle">{playlistDetail.title}</h1>
      <div className="video-card-container">
        {playlistVideoId.map((id) => {
          const videoDetail = getVideo(videoData, id);
          return (
            <div key={id}>
              <ImCross
                onClick={() =>
                  featureDispatch({
                    type: "PLAYLIST_VIDEO_HANDLER",
                    payLoad: {
                      isADD: false,
                      playListId: playlistId,
                      videoId: id
                    }
                  })
                }
              />
              <div className="">
                <VideoCard video={videoDetail} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
