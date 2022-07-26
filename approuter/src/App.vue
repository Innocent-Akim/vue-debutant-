<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/dashboard">dashboard</router-link>
    <router-link to='settings'>Settings</router-link>
  </nav> -->
   <div class="app">
    <sidebar />
    <router-view />
  </div>
  
</template>

<script>
import sidebar from "./components/sidebar/Siderbar.vue";
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --link: #f1f5f9;
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", "sans-serif";
}
body {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 1rem;
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>