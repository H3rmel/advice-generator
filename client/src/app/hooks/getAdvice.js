// API instance
import api from "../services/Api";

export const getInfo = async (pathURL, setData) => {
  const response = await api.get(pathURL);
  setData(response.data);
};
