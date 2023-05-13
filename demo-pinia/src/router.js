import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./view/home.vue";
import Store from "./view/store.vue";
import Test from "./view/test.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/test",
    component: Test,
  },
  {
    path: "/store",
    component: Store,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
