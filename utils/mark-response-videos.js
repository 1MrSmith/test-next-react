const markResponseVideos = (responseVideos = [], bookmarkVideos = []) =>
    responseVideos.map(
      (item) => bookmarkVideos.includes(String(item.id)) ? {...item, checked: true} : item);

export default markResponseVideos;