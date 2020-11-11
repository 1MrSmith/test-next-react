import axios from 'axios';

const apiKey = '5628e59945411114e5c3545e385349d1';

export const getPopular = async (pageId, type) => {
  const response = await axios
  .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=${pageId}`);

  return response.data || null;
}

export const getPopularById = async (typeId, type) => {
  const response = await axios
  .get(`https://api.themoviedb.org/3/${type}/${typeId}?api_key=${apiKey}&language=en-US`);

  return response.data || null;
}

export const searchByName = async (query, pageId, type) => {
  const response = await axios
  .get(`https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&language=en-US&query=${query}&page=${pageId}&include_adult=false`);

  return response.data || null;
}
