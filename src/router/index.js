import { createRouter, createWebHistory } from "vue-router";
import MeetingList from "../views/MeetingList.vue";
import MeetingDetails from "../views/MeetingDetails.vue";
import About from "../views/About.vue";
import MeetingCreate from "../views/MeetingCreate";

const routes = [
  {
    path: "/",
    name: "MeetingList",
    component: MeetingList,
  },
  {
    path: "/meeting/:id",
    name: "MeetingDetails",
    props: true,
    component: MeetingDetails,
  },
  {
    path: "/meeting",
    name: "MeetingCreate",
    component: MeetingCreate,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
