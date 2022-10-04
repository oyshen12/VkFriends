import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FriendsView from "@/views/FriendsView.vue";
import UserView from "@/views/UserView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/friends",
    name: "friends",
    component: FriendsView,
  },
  {
    path: "/user/:id",
    name: "user",
    component: UserView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
