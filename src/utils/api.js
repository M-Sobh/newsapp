import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://app-news-api.herokuapp.com/api",
});

export const getTopics = async () => {
  const { data } = await newsApi.get("/topics");
  return data.topics;
};
