<template>
  <aside>Sidebar</aside>
</template>
<script setup>
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: var(--sidebar-width);
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;
}
</style>  