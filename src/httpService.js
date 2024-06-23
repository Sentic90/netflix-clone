import axios from "axios";
// import { toast } from "react-toastify";
// import logger from "./logService";

const apiUrl = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = apiUrl;
// interceptor will intercept every incomoing || outgoing Request
// axios.interceptors.response.use(null, (error) => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;
//   if (!expectedError) {
//     logger.log(error);
//     toast("An unexpected error occurred - " + error.code);
//   }
//   return Promise.reject(error);
// });

// function setJwtToHeader(jwt) {
//   // Set JWT in backend calls
//   axios.defaults.headers.common["x-auth-token"] = jwt;
// }

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
