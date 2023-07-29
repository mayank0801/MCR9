import { useContext } from "react";
import VideoCard from "../../Component/VideoCard";
import { FeatureContext } from "../../Context/FeatureContext";

export default function WatchLater() {
  const { watchlater } = useContext(FeatureContext);
  return (
    <div>
      <h1>Watch Later</h1>
      <div className="video-card-container">
        {watchlater.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
