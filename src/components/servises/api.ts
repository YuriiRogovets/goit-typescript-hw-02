import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://api.unsplash.com";
const API_KEY = "3k00Y2sDYQ_sN2QkRNxz2ujfSSsCzTrfGXKPDe_B5hw";

axios.defaults.baseURL = BASE_URL;

// const searchParams = {
//   client_id: API_KEY,
//   query: searchQuery,
//   page: numberPage,
//   per_page: 10,
// };

// const searchParams = new URLSearchParams({
//   client_id: API_KEY,
//   query: searchQuery,
//   per_page: 10,
//   page: numberPage,
// });

// export const getPhotos = async () => {
//   const response = await axios.get();
//   return response;
// };

// interface SearchPar {
//   client_id: string;
//   query: string;
//   per_page: number;
//   page: number;
// }

export const getPhotosByQuery = async <T>(
  searchQuery: string,
  pageNumber: number
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get(
    `/search/photos/?client_id=${API_KEY}&query=${searchQuery}&page=${pageNumber}`
  );
  return response.data;
};
