import axios from "axios";

export const getAdvertById = async (id) => {
  const res = await axios.get(`/catalog/${id}`);
  return res.data;
};
