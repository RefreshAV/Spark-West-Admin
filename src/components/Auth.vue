<template>
  <div id="auth" class="h-100 d-flex justify-content-center align-items-center">
    <div class="row w-100 d-flex justify-content-center">
      <div class="col col-md-6">
        <div class="card animated fadeInLeft border-0 shadow">
          <div class="card-body">
            <div class="row">
              <div class="col text-center">
                <h1>SWN Admin</h1>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div
                  class="alert alert-warning animated shake"
                  v-show="adminError"
                >User is not Admin!</div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div
                  class="alert alert-danger animated shake"
                  v-show="error"
                >Incorrect username or password!</div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <form @submit.prevent="login()">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      v-model="email"
                      placeholder="example@email.com"
                      class="form-control mb-4"
                      autocomplete="off"
                      @input="getProfPic()"
                    />
                    <label for="email">Password</label>
                    <input
                      type="password"
                      id="password"
                      v-model="password"
                      placeholder="Super Secret"
                      class="form-control mb-4"
                      autocomplete="off"
                    />
                  </div>
                  <button id="login" type="submit" class="btn btn-danger btn-lg btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/firebaseInit.js";
import firebase from "firebase";

export default {
  name: "Auth",
  data() {
    return {
      profPic: "",
      name: "",
      email: "",
      password: "",
      error: false,
      isAdmin: false,
      adminError: false
    };
  },
  methods: {
    getProfPic() {
      const email = this.email;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(String(email).toLowerCase())) {
        db.collection("users")
          .where("user.email", "==", email)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.profPic = doc.data().user.photo;
              this.name = doc.data().user.name;
            });
          })
          .catch((this.name = ""), (this.profPic = ""));
      } else {
        this.profPic = "";
        this.name = "";
      }
    },
    login() {
      document.getElementById("login").innerHTML = '<span class="spinner-border spinner-border" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'
      db.collection("users")
        .where("user.email", "==", this.email)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.data().user.isAdmin) {
              this.isAdmin = true;
            }
          });
        })
        .then(() => {
          if (this.isAdmin) {
            this.error = false;
            let that = this;
            firebase
              .auth()
              .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
              .then(() => {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(this.email, this.password)
                  .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    that.error = true;
                  });
              });

            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                that.$router.push("/");
              }
            });
          } else {
            this.adminError = true
            document.getElementById("login").innerHTML = "Login"
          }
        });
    }
  }
};
</script>

<style scoped>
#auth {
  background: #151515;
}

input[type="email"],
input[type="password"] {
  border-radius: 40px;
}

.card {
  border-radius: 12px;
}

.card-body {
  transition: 1s;
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
