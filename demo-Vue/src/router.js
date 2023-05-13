import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainView",
    component: () => import("./view/main.vue"),
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: () => import("./view/buttons.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
