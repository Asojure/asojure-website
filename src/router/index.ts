import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const yOffset = 50;
        const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        return { top: y, behavior: 'smooth' };
      }
    }
    return { top: 0 };
  },
});

export default router;
