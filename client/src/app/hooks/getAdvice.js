// API instance
import api from "../services/Api";

export const getInfo = async (pathURL, setData, setLoading) => {
  const response = await api.get(pathURL);
  setData(response.data);
  setLoading(true);
};
