<script>
import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../pages/Dashboard.vue";
import home from "../pages/Home.vue";
import login from "../pages/Login.vue";
import rapport from "../pages/Rapport.vue";
import statisque from "../pages/Statistique.vue";
import operation from "../pages/Operation.vue";
import registre from "../pages/Register.vue";

const routes = [
  {
    name: "home",
    path: "/",
    components: home,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    components: dashboard,
  },
  {
    name: "login",
    path: "/login",
    components: login,
  },
  {
    name: "rapport",
    path: "/rapport",
    components: rapport,
  },
  {
    name: "registre",
    path: "/registre",
    components: registre,
  },
  {
    name: "operation",
    path: "/operation",
    components: operation,
  },
  {
    name: "statisque",
    path: "/statisque",
    components: statisque,
  },
];

export default createRouter({
  routes: routes,
  history: createWebHistory(),
});
</script>