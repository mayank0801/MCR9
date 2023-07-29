import { createContext, useReducer } from "react";
import { categories, videos } from "../Data/data";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const videoDataLocal = localStorage.getItem("videosLocal")
    ? JSON.parse(localStorage?.getItem("videosLocal"))
    : videos;

  console.log(videoDataLocal, "VideDatalocal");

  const intialState = {
    videocategories: categories,
    videoData: videoDataLocal
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_NOTE": {
        const { videoId, NoteInfo } = action.payLoad;
        const updatedData = state.videoData.map((video) =>
          video._id == videoId
            ? { ...video, notes: [...video.notes, NoteInfo] }
            : { ...video }
        );
        console.log(updatedData, "hioi");
        localStorage.setItem("videosLocal", JSON.stringify(updatedData));
        return { ...state, videoData: updatedData };
      }

      case "REMOVE_NOTE": {
        const { videoId, NoteId } = action.payLoad;
        const updatedData = state.videoData.map((video) =>
          video._id == videoId
            ? {
                ...video,
                notes: video.notes.filter(({ _id }) => _id !== NoteId)
              }
            : { ...video }
        );
        localStorage.setItem("videosLocal", JSON.stringify(updatedData));
        return { ...state, videoData: updatedData };
      }

      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <DataContext.Provider
      value={{
        videocategories: state.videocategories,
        videoData: state.videoData,
        dispatch,
        state
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
