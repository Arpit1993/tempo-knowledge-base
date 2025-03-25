import { tempoKnowledgeBaseApi } from "./axios";

export const getOrganisation = async () => {
  const response = await tempoKnowledgeBaseApi.get("/organizations");
  return response;
};

export const getArticle = async (id) => {
  const response = await tempoKnowledgeBaseApi.get(`/articles?id=${id}`);
  return response;
};
