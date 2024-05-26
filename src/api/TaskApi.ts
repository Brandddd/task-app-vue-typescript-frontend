import apiBase from "./axiosInstance";
import { ITask } from "@/interfaces/Task";

export const createTask = async (task: ITask) => {
  await apiBase.post("/tasks", task);
};
