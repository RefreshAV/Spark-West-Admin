<template>
  <div class="wrapper">
    <div class="container pt-3">
      <div class="row mb-3">
        <div class="col">
          <div class="card bg-dark text-light shadow">
            <div class="card-body">
              <h1>Admin Manager</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="card shadow">
            <div class="card-body">
              <h3>Current Admins:</h3>
              <hr />
              <!-- Large -->
              <ul class="list-group d-none d-md-inline">
                <li
                  v-for="(user, index) in adminUsers"
                  :key="user.id"
                  :class="{ 'list-group-item':true, 'p-0': true, 'list-group-top':(index === 0), 'list-group-bottom':(index === adminUsers.length - 1) }"
                >
                  <div class="row w-100 m-0">
                    <a
                      :href="'https://sparkwest.network/Users/user/' + user.id"
                      target="_blank"
                      class="col p-2 pr-0 text-dark"
                    >
                      <div class="row">
                        <div class="col-auto m-0">
                          <img class="user-img" :src="user.img" alt="profile picture" />
                        </div>
                        <div class="col">
                          <div class="row">
                            <div class="col p-0">
                              <h4>{{ user.name }}</h4>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col p-0">
                              <p class="m-0">{{ user.email }}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col text-info p-0">
                              <small>{{ user.uid }}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="col-auto p-0" v-if="user.uid != currentUser">
                      <button
                        :id="'button' + index"
                        @click="removeUser(index)"
                        :class="{ 'btn':true, 'rounded-0':true, 'border-0':true, 'btn-danger':true, 'btn-lg':true, 'h-100':true, 'btn-top':(index === 0), 'btn-bottom':(index === adminUsers.length - 1) }"
                      >
                        <i class="fas fa-times fa-lg"></i>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>

              <!-- Small -->
              <div class="d-md-none w-100">
                <div
                  id="current"
                  v-for="(user, index) in adminUsers"
                  :key="user.id"
                  :class="{ 'mb-2':(index != adminUsers.length - 1), 'row':true, 'w-100':true, 'm-0':true }"
                >
                  <div class="col p-0">
                    <div class="card">
                      <div class="card-body p-0">
                        <div class="row m-2 d-flex justify-content-center mb-2">
                          <div class="col-auto">
                            <img class="user-img" :src="user.img" alt="profile picture" />
                          </div>
                        </div>

                        <div class="row mb-2 d-flex justify-content-center">
                          <div class="col-auto">
                            <h4>{{ user.name }}</h4>
                            <p class="m-0">{{ user.email }}</p>
                            <small class="text-info">{{ user.uid }}</small>
                          </div>
                        </div>

                        <div class="row" v-if="user.uid != currentUser">
                          <div class="col m-0">
                            <button
                              :id="'button' + index"
                              @click="removeUser(index)"
                              class="btn btn-danger btn-lg btn-block rounded-0 border-0"
                            >
                              <i class="fas fa-times fa-lg"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div class="row mb-3 d-flex justify-content-center">
        <div class="col col-md-8">
          <div class="card shadow">
            <div class="card-header card-header-alt">
              <h3>Add Admin</h3>
            </div>
            <div class="card-body">
              <div :class="{ 'input-group':true, 'input-group-lg':true, 'mb-3':(searchUsers.length > 0) }">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Users email"
                  aria-label="Users email"
                  aria-describedby="button-addon"
                  v-model="email"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button" id="button-addon" @click="search">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>

              <!-- Large -->
              <ul class="list-group d-none d-md-inline" v-if="searchUsers">
                <li
                  v-for="(user, index) in searchUsers"
                  :key="user.id"
                  :class="{ 'list-group-item':true, 'p-0': true, 'list-group-top':(index === 0), 'list-group-bottom':(index === searchUsers.length - 1) }"
                >
                  <div class="row w-100 m-0">
                    <a
                      :href="'https://sparkwest.network/Users/user/' + user.id"
                      target="_blank"
                      class="col p-2 pr-0 text-dark"
                    >
                      <div class="row">
                        <div class="col-auto m-0">
                          <img class="user-img" :src="user.img" alt="profile picture" />
                        </div>
                        <div class="col">
                          <div class="row">
                            <div class="col p-0">
                              <h4>{{ user.name }}</h4>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col p-0">
                              <p class="m-0">{{ user.email }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="col-auto p-0" v-if="user.uid != currentUser && !user.isAdmin">
                      <button
                        :id="'button' + index"
                        @click="addUser(index)"
                        :class="{ 'btn':true, 'rounded-0':true, 'border-0':true, 'btn-success':true, 'btn-lg':true, 'h-100':true, 'btn-top':(index === 0), 'btn-bottom':(index === searchUsers.length - 1) }"
                      >
                        <i class="fas fa-plus fa-lg"></i>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>

              <!-- Small -->
              <div class="d-md-none w-100" v-if="searchUsers">
                <div
                  id="current"
                  v-for="(user, index) in searchUsers"
                  :key="user.id"
                  :class="{ 'mb-2':(index != searchUsers.length - 1), 'row':true, 'w-100':true, 'm-0':true }"
                >
                  <div class="col p-0">
                    <div class="card">
                      <div class="card-body p-0">
                        <div class="row m-2 d-flex justify-content-center mb-2">
                          <div class="col-auto">
                            <img class="user-img" :src="user.img" alt="profile picture" />
                          </div>
                        </div>

                        <div class="row mb-2 d-flex justify-content-center">
                          <div class="col-auto">
                            <h4>{{ user.name }}</h4>
                            <small class="m-0">{{ user.email }}</small>
                          </div>
                        </div>

                        <div class="row" v-if="user.uid != currentUser && !user.isAdmin">
                          <div class="col m-0">
                            <button
                              :id="'button' + index"
                              @click="addUser(index)"
                              class="btn btn-success btn-lg btn-block rounded-0 border-0"
                            >
                              <i class="fas fa-plus fa-lg"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "./../firebase/firebaseInit.js";
import { firestore, auth } from "firebase";

export default {
  name: "manager",
  data() {
    return {
      adminUsers: [],
      searchUsers: [],
      email: "",
      currentUser: ""
    };
  },
  mounted() {
    this.currentUser = auth().currentUser.uid;
    db.collection("users")
      .where("user.isAdmin", "==", true)
      .get()
      .then(querysnapshot => {
        querysnapshot.forEach(doc => {
          let data = {
            name: doc.data().user.name,
            email: doc.data().user.email,
            website: doc.data().user.website || "",
            facebook: doc.data().user.facebook || "",
            twitter: doc.data().user.twitter || "",
            instagram: doc.data().user.instagram || "",
            linkedin: doc.data().user.linkedin || "",
            about: doc.data().user.about || "",
            img: doc.data().user.photo,
            uid: doc.data().user.UserUID,
            id: doc.id
          };

          this.adminUsers.push(data);
        });
      });
  },
  methods: {
    removeUser(index) {
      let user = this.adminUsers[index];
      document.getElementById("button" + index).innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>';
      db.collection("users")
        .where(firestore.FieldPath.documentId(), "==", user.id)
        .get()
        .then(querysnapshot => {
          querysnapshot.forEach(doc => {
            doc.ref.update({
              user: {
                name: user.name,
                email: user.email,
                website: user.website,
                facebook: user.facebook,
                twitter: user.twitter,
                instagram: user.instagram,
                linkedin: user.linkedin,
                about: user.about,
                UserUID: user.uid,
                photo: user.img,
                isAdmin: false
              }
            });
          });
        })
        .then(() => {
          this.adminUsers.splice(index, 1);
        });
    },
    addUser(index) {
      let user = this.searchUsers[index];
      document.getElementById("button" + index).innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>';
      db.collection("users")
        .where(firestore.FieldPath.documentId(), "==", user.id)
        .get()
        .then(querysnapshot => {
          querysnapshot.forEach(doc => {
            doc.ref.update({
              user: {
                name: user.name,
                email: user.email,
                website: user.website,
                facebook: user.facebook,
                twitter: user.twitter,
                instagram: user.instagram,
                linkedin: user.linkedin,
                about: user.about,
                UserUID: user.uid,
                photo: user.img,
                isAdmin: true
              }
            });
          });
        })
        .then(() => {
          this.adminUsers.push(user);
          this.searchUsers[index].isAdmin = true
        });
    },
    search() {
      if (this.email) {
        this.searchUsers = [];
        db.collection("users")
          .where("user.email", "==", this.email)
          .get()
          .then(querysnapshot => {
            querysnapshot.forEach(doc => {
              let data = {
                name: doc.data().user.name,
                email: doc.data().user.email,
                website: doc.data().user.website || "",
                facebook: doc.data().user.facebook || "",
                twitter: doc.data().user.twitter || "",
                instagram: doc.data().user.instagram || "",
                linkedin: doc.data().user.linkedin || "",
                about: doc.data().user.about || "",
                img: doc.data().user.photo,
                uid: doc.data().user.UserUID,
                id: doc.id,
                isAdmin: doc.data().user.isAdmin || false
              };

              this.searchUsers.push(data);
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.user-img {
  height: 100px;
  width: 100px;
  border-radius: 12px;
}

.card-body {
  overflow: hidden;
}

.list-group-item {
  overflow: hidden;
}

a {
  text-decoration: none;
}

a:hover {
  background: rgb(245, 245, 245);
}

.list-group-top {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.list-group-bottom {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.btn-top {
  border-top-right-radius: 12px !important;
}

.btn-bottom {
  border-bottom-right-radius: 12px !important;
}

.card {
  z-index: 1002 !important;
}

.card-header-alt {
  background-color: #fd4260;
  color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: none;
}

#current .card {
  overflow: hidden;
}

.form-control {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}

.input-group .btn {
  border-top-right-radius: 40px !important;
  border-bottom-right-radius: 40px !important;
  padding-right: 22px !important;
}
</style>
