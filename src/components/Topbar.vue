<template>
  <nav class="navbar navbar-dark bg-dark shadow">
    <router-link class="navbar-brand h-100 d-flex align-items-center" to="/">
      <img src="../assets/logo.svg" alt="logo" class="h-100" />
      <span class="badge badge-danger ml-2">Admin</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "topBar"
};
</script>

<style scoped>
.badge {
  background-color: #fd4260;
  font-size: 1.2em;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
}

nav {
  height: 74px;
}
</style>