
import axios from "axios";

// const API_URL = "http://localhost:8082/tasks";
const API_URL = `${import.meta.env.VITE_API_URL}/tasks`;

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

export const updateTask = async (taskId, taskData) => {
  const response = await axios.patch(`${API_URL}/${taskId}`, taskData);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/${taskId}`);
  return response.data;
};
