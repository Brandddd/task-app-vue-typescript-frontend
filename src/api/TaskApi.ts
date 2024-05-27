import apiBase from "./axiosInstance";
import { ITask } from "@/interfaces/Task";

// Create
export const createTask = async (task: ITask) => {
  try {
    await apiBase.post("/tasks", task);
    console.log("Task done!");
  } catch (error) {
    console.error(error);
  }
};

// Read
export const getTask = async () => {
  try {
    const response = await apiBase.get("/tasks");
    return response;
  } catch (error) {
    console.error(error);
  }
};
