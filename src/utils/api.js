import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newsapp247.herokuapp.com/api",
});

export const getTopics = async () => {
  const { data } = await newsApi.get("/topics");
  return data.topics;
};

export const getArticlesByTopic = async (topicName) => {
  const { data } = await newsApi.get(`/articles?topic=${topicName}`);
  return data.articles;
};
