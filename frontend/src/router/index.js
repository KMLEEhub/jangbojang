import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SelectState from "../views/SelectState.vue";
import CustomerJoinView from "../views/CustomerJoinView.vue";
import SellerJoinView from "../views/SellerJoinView.vue";
import MyPageView from '../views/Customer/MyPageView.vue'
import CustomerProfileView from '../views/Customer/CustomerProfileView.vue'

const routes = [
  {
    path: "/test",
    name: "test",
    component: testView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/selectjoin",
    name: "selectjoin",
    component: SelectState,
  },
  {
    path: "/joinCustomer",
    name: "joinCustomer",
    component: CustomerJoinView,
  },
  {
    path: "/joinSeller",
    name: "joinSeller",
    component: SellerJoinView,
  },
  {
    path: "/join",
    name: "join",
    component: () => import(/* webpackChunkName: "about" */ "../views/CustomerJoinView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: '/customer/:id',
    name: 'mypage',
    component: MyPageView,
    // children: [
    //   {
    //     path: '/customer/:id/profile',
    //     name: 'profile',
    //     component: CustomerProfileView
    //   }]
  },
  {
    path: '/customer/:id/profile',
    name: 'profile',
    component: CustomerProfileView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
