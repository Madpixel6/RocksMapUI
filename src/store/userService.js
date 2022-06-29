import api from "./oauth"

const getUsers = () => {
  return api
    .get("/api/v1/user");
};

const getUser = (id) => {
  return api
    .get(`/api/v1/user/${id}`);
};

const createUser = (data) => {
  return api
    .post("/api/v1/user", data);
};

const removeUser = (id) => {
  return api
    .delete(`/api/v1/user/${id}`);
};

export default {
  getUsers,
  getUser,
  createUser,
  removeUser
};