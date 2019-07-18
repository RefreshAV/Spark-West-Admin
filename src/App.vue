<template>
  <div id="app">
    <!-- Nav -->
    <topbar id="top" v-if="authenticated" class="animated slideInDown" />
    <sidebar id="side" v-if="authenticated" class="animated slideInLeft" />

    <!-- Main -->
    <div id="window" class="row w-100 m-0">
      <div class="col p-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";

export default {
  name: "app",
  data() {
    return {
      authenticated: true
    };
  },
  watch: {
    $route(to, from) {
      if (to.name == "login") {
        this.authenticated = false;
      } else {
        this.authenticated = true;
      }
    }
  },
  components: {
    Sidebar,
    Topbar
  }
};
</script>

<style>
.wrapper {
  padding-left: 80px;
  padding-top: 74px;
}

#app {
  height: 100%;
}

#side {
  position: fixed;
  width: 400px;
  height: calc(100% - 74px);
  z-index: 1001;
  left: 0;
  bottom: 0;
}

.sideMax {
  z-index: 1003 !important;
}

@media (max-width: 619px) {
  #side {
    width: 300px;
  }

  .wrapper {
    padding-left: 60px;
  }
}

#top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1005 !important;
}

.card {
  border-radius: 12px !important;
}

#window {
  height: 100%;
}

/* Button colours */
.btn-danger {
  background-color: #fd4260;
}

.btn-danger:hover {
  background-color: #e63452;
}

.btn-outline-danger {
  border-color: #fd4260;
  color: #fd4260;
}

.btn-outline-danger:hover {
  background-color: #e63452;
  color: white;
}
</style>
