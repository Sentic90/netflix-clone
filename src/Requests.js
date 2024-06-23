const API_KEY = import.meta.env.VITE_API_URL;

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: "",
  fetchTopRated: "",
  fetchActionMovies: "",
  fetchComedyMovies: "",
  fetchHorrorMovies: "",
  fetchRomanceMovies: "",
  fetchDocumentaries: "",
};
