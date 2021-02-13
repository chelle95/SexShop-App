import axios from "axios";

export const ApiGeneralPost = (data, url) => {
  return axios
    .create({
      baseURL: "http://localhost:5000",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .post(`${url}`, data);
};

export const ApiGeneralGet = (params, url) => {
  return axios
    .create({
      baseURL: "http://localhost:5000",
      timeout: 10000,
    })
    .get(`${url}`, { params: params });
};
