import axios from "axios";
const url = "http://localhost:3000";
export const fetchUsersAPI = () => axios.get(`${url}/users`);
export const fetchUserAPI = (id) => axios.get(`${url}/users/${id}`);
export const addUserAPI = (user) => axios.post(`${url}/users`, user);
export const deleteUserAPI = (id) => axios.delete(`${url}/users/${id}`);
export const editUserAPI = (id, user) => axios.put(`${url}/users/${id}`, user);
