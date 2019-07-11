<template>
  <div id="app">
    <topbar id="top" />
    <sidebar id="side" />
    <!-- Desktop -->
    <div id="window" class="row w-100 m-0">
      <div class="col p-0 pt-3">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";

export default {
  name: "app",
  components: {
    Main,
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
  z-index: 1001 !important;
  left: 0;
  bottom: 0;
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
  padding-left: 80px;
  padding-top: 74px !important; 
}
</style>
