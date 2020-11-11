import config from '../config';

const getQuantityPages = (paramsId, arrayLength) => {
  const startIndex = paramsId - 1 >= 1 ? (paramsId - 1) * config.cardsOnPage : 0;
  const endIndex = startIndex + config.cardsOnPage;
  const page = paramsId || 1;
  const totalPage = Math.ceil(arrayLength / config.cardsOnPage);

  return {startIndex, endIndex, page, totalPage};
}

export default getQuantityPages;
