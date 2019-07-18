<template>
  <nav class="navbar navbar-dark bg-dark shadow text-light">
    <router-link class="navbar-brand h-100 d-flex align-items-center" to="/">
      <img src="../assets/logo.svg" alt="logo" class="h-100" />
      <span class="badge badge-danger ml-2">Admin</span>
    </router-link>
    <div class="h-100 d-flex align-items-center">
      <div class="dropdown mr-3">
        <button
          class="btn rounded-pill btn-danger font-weight-bold dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >User</button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Profile</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="#" @click.prevent="logOut">Logout</a>
        </div>
      </div>

      <img
        id="profPic"
        src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        alt="profile picture"
      />
    </div>
  </nav>
</template>

<script>
import { auth } from "firebase";
export default {
  name: "topBar",
  methods: {
    logOut() {
      let that = this;
      this.$router.push("/");
      auth()
        .signOut()
        .then(
          function() {
            // that.$router.push("/login");
          },
          function(error) {
            console.error("Sign Out Error: ", error);
          }
        );
    }
  }
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

#profPic {
  max-height: 100%;
  border-radius: 100%;
}

.btn-danger {
  background-color: #fd4260;
}

.btn-danger:hover {
  background-color: #e63452;
}

.btn-danger:focus {
  background-color: #cc1d3a;
}
</style>