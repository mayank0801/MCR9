import { useContext } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../../Component/VideoCard";
import { DataContext } from "../../Context/DataContext";
import { filterVideoByCategory } from "../../Utlis/utlis";

export default function SingleVideo() {
  const { category } = useParams();
  const { videoData } = useContext(DataContext);
  const categoryData = filterVideoByCategory(videoData, category);

  return (
    <div>
      <h1>{category}</h1>

      <div className="video-card-container">
        {categoryData.map((categoryVideo) => (
          <VideoCard key={categoryVideo._id} video={categoryVideo} />
        ))}
      </div>
    </div>
  );
}
