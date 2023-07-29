export const filterVideoByCategory = (videoData, categoryTofind) => {
  return videoData.filter((video) => video.category === categoryTofind);
};

export const filterVideoByTitle = (videoData, searchedTitle) => {
  return videoData.filter(({ title }) =>
    title.toLowerCase().includes(searchedTitle.toLowerCase())
  );
};

export const isWatchLater = (watchLaterList, idToFind) => {
  const output = watchLaterList.find(({ _id }) => _id == idToFind);
  return output;
};

export const isInPlayList = (playListData, playlistId, VideoId) => {
  const playlistDetail = playListData.find(
    (playlistInfo) => playlistInfo._id == playlistId
  );
  const isPresent = playlistDetail.videosId.find((id) => id == VideoId);
  return isPresent;
};

export const getImage = (videoData, videoId) => {
  console.log(videoData, videoId);
  if (!videoId) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HgQeuU56XPS8a-kp28Gr7-9jka2LT1sP7myxgX_L&s";
  } else {
    const output = videoData.find(({ _id }) => _id == videoId)?.thumbnail;
    console.log(output, "output");
    return output;
  }
};

export const getVideo = (videoData, idTofind) => {
  return videoData.find(({ _id }) => _id == idTofind);
};
