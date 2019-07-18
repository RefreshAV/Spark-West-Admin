<template>
  <div id="app">
    <!-- Nav -->
    <topbar id="top" v-if="authenticated" class="animated slideInDown"/>
    <sidebar id="side" v-if="authenticated" class="animated slideInLeft"/>

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
    }
  },
  watch: {
    $route(to, from) {
      if(to.name == "login") {
        this. authenticated = false
      } else {
        this.authenticated = true
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

  #window {
    padding-left: 60px !important;
  }
}

#top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000 !important;
}

.card {
  border-radius: 12px !important;
}

#window {
  height: 100%;
  /* padding-left: 80px;
  padding-top: 74px !important; */
}
</style>
