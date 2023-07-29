import { createContext, useReducer } from "react";

export const FeatureContext = createContext();

export default function FeatureContextProvider({ children }) {
  const watchLaterData = localStorage.getItem("watchlater")
    ? JSON?.parse(localStorage?.getItem("watchlater"))
    : [];

  const playlistData = localStorage.getItem("playlist")
    ? JSON.parse(localStorage.getItem("playlist"))
    : [];

  const reducer = (featureState, action) => {
    switch (action.type) {
      case "ADD_TO_WATCHLATER": {
        const updatedwatchLater = [...featureState.watchlater, action.payLoad];
        localStorage.setItem("watchlater", JSON.stringify(updatedwatchLater));
        return {
          ...featureState,
          watchlater: updatedwatchLater
        };
      }

      case "REMOVE_FROM_WATCHLATER": {
        const updatedwatchLater = featureState.watchlater.filter(
          ({ _id }) => _id !== action.payLoad
        );
        localStorage.setItem("watchlater", JSON.stringify(updatedwatchLater));
        return { ...featureState, watchlater: updatedwatchLater };
      }

      case "ADD_NEW_PLAYLIST": {
        const updatedPlaylist = [...featureState.playlist, action.payLoad];
        localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
        return { ...featureState, playlist: updatedPlaylist };
      }

      case "REMOVE_PLAYLIST": {
        const updatedPlaylist = featureState.playlist.filter(
          ({ _id }) => _id !== action.payLoad
        );
        localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
        return { ...featureState, playlist: updatedPlaylist };
      }

      case "PLAYLIST_VIDEO_HANDLER": {
        let updatedPlaylist = [];

        if (action.payLoad.isADD) {
          updatedPlaylist = featureState.playlist.map((playlistDetail) =>
            playlistDetail._id == action.payLoad.playListId
              ? {
                  ...playlistDetail,
                  videosId: [...playlistDetail.videosId, action.payLoad.videoId]
                }
              : { ...playlistDetail }
          );
        } else {
          updatedPlaylist = featureState.playlist.map((playlistDetail) =>
            playlistDetail._id == action.payLoad.playListId
              ? {
                  ...playlistDetail,
                  videosId: playlistDetail.videosId.filter(
                    (id) => id != action.payLoad.videoId
                  )
                }
              : { ...playlistDetail }
          );
        }
        localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
        return { ...featureState, playlist: updatedPlaylist };
      }

      default:
        return { ...featureState };
    }
  };

  const [featureState, featureDispatch] = useReducer(reducer, {
    playlist: playlistData,
    watchlater: watchLaterData
  });

  return (
    <div>
      <FeatureContext.Provider
        value={{
          x: 2,
          watchlater: featureState.watchlater,
          playlist: featureState.playlist,
          featureDispatch
        }}
      >
        {children}
      </FeatureContext.Provider>
    </div>
  );
}

// const playlist:[
//   {
//      id:"1233"
//     title:"Playlist1",
//     describe:"rvfecxw"
//     videosId:[]
//
//   },
//   {
//      id:"1234"
//     title:"Playlist2",
//     describe:"rvfecxw"
//     videoId:[]
//
//   },
//   {
//      id:"1235"
//     title:"Playlist3",
//     describe:"rvfecxw"
//     video:[]
//
//   }
// ]

// const videoNote=[
//   {
//     id;"videoId",
//     notes:[]
//   }
// ]
