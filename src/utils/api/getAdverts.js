import axios from "axios";

axios.defaults.baseURL = "https://6531500a4d4c2e3f333cd38e.mockapi.io/api";

export const getAdverts = async (queryParams) => {
  const params = new URLSearchParams(queryParams);
  const res = await axios.get(`/catalog?${params}`);
  return res.data;
};
