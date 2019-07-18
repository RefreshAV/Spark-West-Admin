<template>
  <div id="event">
    <div class="container pt-3">
      <div v-if="!editing" class="animated fadeIn">
        <div class="card mb-3 bg-dark text-light shadow" v-if="id">
          <div class="card-header">
            <h2>
              <i class="fas fa-calendar-alt mr-2 d-md-inline d-none"></i>
              {{ date.year }} / {{ date.month }} / {{ date.day }}
            </h2>
            <h3 class="d-flex align-items-center">
              <i class="fas fa-clock mr-2"></i>
              <span class="badge badge-primary badge-pill">{{time}}</span>
            </h3>
          </div>
          <div class="card-body">
            <h1 class="mb-0 d-md-inline d-none">{{ title }}</h1>
            <h3 class="mb-0 d-md-none">{{ title }}</h3>
          </div>
        </div>

        <div class="card shadow mb-3">
          <div class="card-body pb-1">
            <div class="row d-flex align-items-center">
              <div class="col-md-auto col mb-3 d-flex justify-content-center">
                <img :src="author.img" alt="profile picture" height="100" width="100" />
              </div>
              <div class="col mb-3">
                <div class="row mb-2">
                  <div class="col-auto">
                    <h3 class="m-0">{{author.name}}</h3>
                  </div>
                  <div class="col-auto p-0">
                    <h5 class="m-0">
                      <span class="badge badge-pill badge-info">
                        <i class="fa fa-calendar" />
                        {{ author.events }}
                      </span>
                    </h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <p class="m-0">Email: {{author.email}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <small class="text-info">{{author.uid}}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md mb-3">
            <div class="card shadow">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <img :src="image" alt="Event-image" class="img-fluid mb-2 shadow-sm" />
                  </div>
                  <div class="col">
                    <p>
                      <b>Description:</b>
                      {{desc}}
                    </p>
                    <p>
                      <b>Location:</b>
                      {{locationName}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-md-auto mb-3">
            <div id="options" class="card bg-dark text-light shadow h-100">
              <div class="card-header">
                <h3>Options:</h3>
              </div>
              <div class="card-body d-flex align-items-center">
                <div class="h-100 w-100">
                  <div class="row">
                    <div class="col">
                      <button
                        id="approve"
                        @click="approve"
                        class="btn btn-block rounded-pill btn-outline-success btn-lg mb-3"
                      >
                        <strong>Approve</strong>
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <button
                        id="decline"
                        @click="decline"
                        class="btn btn-block rounded-pill btn-outline-danger btn-lg mb-3"
                      >
                        <strong>Decline</strong>
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <button
                        id="edit"
                        @click="edit"
                        class="btn btn-block rounded-pill btn-outline-info btn-lg"
                      >
                        <strong>Edit</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="animated fadeIn">
        <div class="card mb-3 bg-dark text-light shadow" v-if="id">
          <div class="card-header">
            <div class="form-group">
              <label class="font-weight-bold" for="eventDate">Event Date:</label>
              <input id="eventDate" type="date" class="form-control" v-model="date" required />
            </div>
            <div class="form-group">
              <label for="eventTimeStart">
                <label class="font-weight-bold" for="eventTimeStart">
                  Event Time:
                  <small class="badge badge-pill badge-warning">24 hour</small>
                </label>
              </label>
              <div class="row">
                <div class="col-md-6 mb-2">
                  <input
                    type="time"
                    id="eventTimeStart"
                    class="form-control"
                    autocomplete="off"
                    v-model="start"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="time"
                    id="eventTimeEnd"
                    class="form-control"
                    autocomplete="off"
                    v-model="end"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label class="font-weight-bold" for="title">Title:</label>
              <input
                type="text"
                id="title"
                placeholder="Event Title"
                class="form-control"
                autocomplete="off"
                v-model="title"
                required
              />
            </div>
          </div>
        </div>

        <div class="card shadow mb-3">
          <div class="card-body pb-1">
            <div class="row d-flex align-items-center">
              <div class="col-md-auto col mb-3 d-flex justify-content-center">
                <img :src="author.img" alt="profile picture" height="100" width="100" />
              </div>
              <div class="col mb-3">
                <div class="row mb-2">
                  <div class="col-auto">
                    <h3 class="m-0">{{author.name}}</h3>
                  </div>
                  <div class="col-auto p-0">
                    <h5 class="m-0">
                      <span class="badge badge-pill badge-info">
                        <i class="fa fa-calendar" />
                        {{ author.events }}
                      </span>
                    </h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <p class="m-0">Email: {{author.email}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <small class="text-info">{{author.uid}}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md mb-3">
            <div class="card shadow">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md">
                    <img :src="image" alt="Event-image" class="img-fluid mb-2 shadow-sm" />
                    <button class="btn btn-block btn-primary rounded-pill mb-2">Change</button>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label class="font-weight-bold" for="message">Description:</label>
                      <br />
                      <textarea
                        id="message"
                        placeholder="A description of your event..."
                        rows="5"
                        class="form-control"
                        maxlength="500"
                        v-model="desc"
                      />
                      <i class="counter">
                        Characters:
                        <span class="cNum">{{ characters }}</span>
                      </i>
                    </div>
                    <p>
                      <b>Location:</b>
                      {{locationName}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-md-auto mb-3">
            <div id="options" class="card bg-dark text-light shadow h-100">
              <div class="card-header">
                <h3>Options:</h3>
              </div>
              <div class="card-body d-flex align-items-center">
                <div class="h-100 w-100">
                  <div class="row">
                    <div class="col">
                      <button
                        id="approve"
                        @click="approve"
                        class="btn btn-block rounded-pill btn-outline-success btn-lg mb-3"
                      >
                        <strong>Approve</strong>
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <button
                        id="decline"
                        @click="decline"
                        class="btn btn-block rounded-pill btn-outline-danger btn-lg mb-3"
                      >
                        <strong>Decline</strong>
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <button
                        id="edit"
                        @click="edit"
                        class="btn btn-block rounded-pill btn-outline-info btn-lg"
                      >
                        <strong>Edit</strong>
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
</template>

<script>
import db from "../firebase/firebaseInit";
import firebase from "firebase";

export default {
  name: "EventDetail",
  data() {
    return {
      id: null,
      title: "Event",
      date: null,
      time: null,
      email: null,
      desc: null,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Ajax_loader_metal_512.gif",
      imageKey: null,
      submitDate: "not found",
      UserUID: null,
      location: null,
      locationName: null,
      author: {
        name: null,
        email: null,
        img: null,
        id: null,
        uid: null,
        events: 0
      },
      liked: false,
      likes: 0,
      likedBy: [],
      attending: false,
      attendees: Math.floor(Math.random() * 100),
      peopleAttending: [],
      event: true,
      editing: false,
      characters: 0,
      start: null,
      end: null
    };
  },
  mounted() {
    db.collection("events")
      .where(
        firebase.firestore.FieldPath.documentId(),
        "==",
        this.$route.params.id
      )
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(doc => {
            (this.id = doc.id),
              (this.title = doc.data().event.title),
              (this.date = doc.data().event.date),
              (this.time = doc.data().event.time),
              (this.email = doc.data().event.email),
              (this.desc = doc.data().event.description),
              (this.imageKey = doc.data().event.imageKey),
              (this.submitDate = doc.data().event.SubmitDate),
              (this.UserUID = doc.data().event.UserUID),
              (this.likes = doc.data().likes),
              (this.likedBy = doc.data().likedBy),
              (this.location = doc.data().event.location),
              (this.locationName = doc.data().event.locationName);
            this.event = true;
          });
        } else {
          this.event = true;
        }
      });
  },
  watch: {
    title: "fetchImage",
    UserUID: "getAuthor",
    desc: function() {
      var char = this.desc.length;
      var maxChar = 500;
      this.characters = maxChar - char;
    },
    time: function() {
      this.start = this.time.slice(0, 5);
      this.end = this.time.slice(6, this.time.length);
    }
  },
  methods: {
    fetchImage() {
      var ref = firebase.storage().ref("events/" + this.imageKey);
      var that = this;

      ref.getDownloadURL().then(function(url) {
        that.image = url;
      });
    },
    getAuthor() {
      db.collection("users")
        .where("user.UserUID", "==", this.UserUID)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.author.id = doc.id;
            this.author.uid = doc.data().user.UserUID;
            this.author.name = doc.data().user.name;
            this.author.img = doc.data().user.photo;
            this.author.email = doc.data().user.email;
          });
        })
        .then(() => {
          db.collection("events")
            .where("event.UserUID", "==", this.author.uid)
            .get()
            .then(querySnapshot => {
              this.author.events = querySnapshot.size;
            });
        });
    },
    deleteEvent() {
      if (confirm("Are you sure?")) {
        var ref = firebase.storage().ref("events/" + this.imageKey);
        ref.delete();

        db.collection("events")
          .where(
            firebase.firestore.FieldPath.documentId(),
            "==",
            this.$route.params.id
          )
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/events/list");
            });
          });
      }
    },
    approve() {
      console.log("Event Approved");
    },
    decline() {
      console.log("Event Declined");
    },
    edit() {
      this.editing = !this.editing;

      if (this.editing) {
        this.date =
          this.date.year + "-" + this.date.month + "-" + this.date.day;

        document.getElementById("approve").setAttribute("disabled", true);
        document.getElementById("decline").setAttribute("disabled", true);
        document.getElementById("edit").innerText = "Done";
      } else {
        let dateObj = {
          year: this.date.slice(0, 4),
          month: this.date.slice(5, 7),
          day: this.date.slice(8, 10)
        };

        this.date = dateObj;
        this.time = this.start + "-" + this.end;

        document.getElementById("approve").removeAttribute("disabled");
        document.getElementById("decline").removeAttribute("disabled");
        document.getElementById("edit").innerText = "Edit";
      }
    }
  }
};
</script>

<style scoped>
#event {
  padding-left: 80px;
  padding-top: 74px;
}

img {
  border-radius: 12px;
}

#options .btn {
  border-width: 2px;
}

input {
  border-radius: 40px;
  border: none;
}

textarea {
  border-radius: 12px;
  resize: none;
}
</style>
