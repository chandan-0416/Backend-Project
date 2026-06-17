import axios from "../api/axios";

export const registerUser = (data) => {
  return axios.post("/users/register", data);
};

export const loginUser = (data) => {
  return axios.post("/users/login", data);
};

export const getCurrentUser = () => {
  return axios.get("/users/current-user");
};