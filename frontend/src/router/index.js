import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SelectState from "../views/SelectState.vue";
import CustomerJoinView from "../views/CustomerJoinView.vue";
import SellerJoinView from "../views/SellerJoinView.vue";
import MyPageView from '../views/Customer/MyPageView.vue'
import CustomerProfileView from '../views/Customer/CustomerProfileView.vue'
import MyStoreView from '../views/Seller/MyStoreView.vue'
import StoreProfileView from '../views/Seller/StoreProfileView.vue'
import StoreMenuView from '../views/Seller/StoreMenuView.vue'
import StoreBillsView from '../views/Seller/StoreBillsView.vue'
import StoreRegisterView from '../views/Seller/StoreRegisterView.vue'
import testView from '../views/test.vue'

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
  },
  {
    path: '/customer/:id/profile',
    name: 'profile',
    component: CustomerProfileView
  },
  {
    path: '/seller/:id',
    name: 'mystore',
    component: MyStoreView
  },
  {
    path: '/seller/:id/store',
    name: 'store_profile',
    component: StoreProfileView
  },
  {
    path: '/seller/:id/menu',
    name: 'store_menu',
    component: StoreMenuView
  },
  {
    path: '/seller/:id/bills',
    name: 'store_bills',
    component: StoreBillsView
  },
  {
    path: '/seller/:id/register',
    name: 'store_register',
    component: StoreRegisterView
  }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
