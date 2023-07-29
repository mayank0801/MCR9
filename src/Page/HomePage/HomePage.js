import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { videocategories } = useContext(DataContext);
  // console.log(videocategories);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Category</h1>
      <div className="category-container">
        {videocategories.map((category) => (
          <div
            className="category-card"
            key={category._id}
            onClick={() => navigate(`/${category.category}`)}
          >
            <img src={category?.thumbnail} alt="categoryThumbnail" />
            <h3>{category?.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
