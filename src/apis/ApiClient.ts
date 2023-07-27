import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http:apollo-lb-220895166.ap-northeast-2.elb.amazonaws.com/",
});
