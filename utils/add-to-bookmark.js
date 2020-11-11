import config from '../config';

const addToBookmark = (user, typeVideo, bookmarkId) => {

  if (typeVideo.match(config.typeVideos.movie)) {

    const { moviesLibrary = [] } = user;
    const index = moviesLibrary.findIndex((item) => item === bookmarkId);
    index === -1 ? moviesLibrary.push(bookmarkId) : moviesLibrary.splice(index, 1);
    user.moviesLibrary = moviesLibrary;

  } else {

    const { tvShowLibrary = [] } = user;
    const index = tvShowLibrary.findIndex((item) => item === bookmarkId);
    index === -1 ? tvShowLibrary.push(bookmarkId) : tvShowLibrary.splice(index, 1);
    user.tvShowLibrary = tvShowLibrary;

  }

  return user;
}

export default addToBookmark;