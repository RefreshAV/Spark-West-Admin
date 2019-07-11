<template>
  <div>
    <div id="wrapper" class="p-3 text-light min">
      <!-- Control -->
      <div id="control">
        <a href class="text-light" @click.prevent="toggle">
          <i id="bars" class="fas fa-bars fa-2x"></i>
        </a>
      </div>

      <!-- Navigation -->
      <div id="navigation" class="h-100">
        <div class="row h-100 display-flex align-items-center">
          <div class="col">
            <div class="row mb-5">
              <div class="col mx-1 d-flex justify-content-end">
                <a
                  id="Home"
                  href="#"
                  class="btn border-0 btn-lg text-center px-0 btn-outline-light btn-nav btn-min"
                >
                  <i class="fas fa-home"></i>
                </a>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col mx-1 d-flex justify-content-end">
                <a
                  id="Edit"
                  href="#"
                  class="btn border-0 btn-lg text-center px-0 btn-outline-light btn-nav btn-min"
                >
                  <i class="fas fa-edit"></i>
                </a>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col mx-1 d-flex justify-content-end">
                <a
                  id="Manage"
                  href="#"
                  class="btn border-0 btn-lg text-center px-0 btn-outline-light btn-nav btn-min"
                >
                  <i class="fas fa-user-shield"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      toggled: false
    };
  },
  watch: {
    toggled: function() {
      document.getElementById("wrapper").classList.toggle("min");
      document.getElementById("bars").classList.toggle("rotate");

      let btns = document.getElementsByClassName("btn-nav");

      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.toggle("btn-min");
        btns[i].classList.toggle("btn-light");
        btns[i].classList.toggle("btn-outline-light");
        btns[i].classList.toggle("border-0");
        btns[i].classList.toggle("rounded-pill");
        btns[i].classList.toggle("shadow");
      }

      if (this.toggled) {
        document.getElementById("Home").innerHTML = "Home";
        document.getElementById("Edit").innerHTML = "Edit";
        document.getElementById("Manage").innerHTML = "Manage";
      } else {
        document.getElementById("Home").innerHTML =
          "<i class='fas fa-home'></i>";
        document.getElementById("Edit").innerHTML =
          "<i class='fas fa-edit'></i>";
        document.getElementById("Manage").innerHTML =
          "<i class='fas fa-user-shield'></i>";
      }
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    }
  }
};
</script>

<style scoped>
#wrapper {
  height: 100%;
  width: 400px;
  transition: 0.5s;
  margin: 0px;
  background-color: #fd4260;
  z-index: 2000 !important;
}

/* #hamburger {
  max-width: 80px !important;
} */

#control {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#bars {
  transition: 0.5s;
}

.rotate {
  transform: rotate(90deg);
}

.min {
  transform: translateX(-320px);
  margin-right: -320px !important;
}

.text-light:focus {
  color: white !important;
}

.btn-nav {
  width: 100%;
  transition: 0.5s;
}

.btn-min {
  width: 42px !important;
}
</style>