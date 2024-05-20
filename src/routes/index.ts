import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/tasks",
    name: "tasks",
    component: () => import("@/components/TaskList.vue"),
  },
  {
    path: "/tasks/new",
    name: "tasks-new",
    component: () => import("@/components/TaskForm.vue"),
  },
  {
    path: "/tasks/:id",
    name: "tasks-details",
    component: () => import("@/components/TaskDetail.vue"),
  },
];

// When using createWebHistory() the URL will look "normal". 
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router