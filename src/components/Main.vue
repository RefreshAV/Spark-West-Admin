<template>
  <div class="container">
    <div class="card shadow mb-3">
      <div class="card-body">
        <h1>Home</h1>
      </div>
    </div>
    <div v-for="(error, index) in errors" :key="index">
      <div :class="'alert alert-dismissible fade show ' + error.type" role="alert">
        <strong>Important Warning!</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <div class="card shadow">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h3>Recent Postings:</h3>
          </div>
        </div>

        <hr />

        <div class="row" id="recent-events">
          <div class="col">
            <div class="card-deck">
              <a href="#" class="card mb-3 bg-dark text-light" v-for="event in recent" :key="event.id">
                <div class="card-header">
                  <h4>{{ event.title }}</h4>
                </div>
                <div class="card-body">{{ event.desc }}</div>
                <div class="card-footer">
                  <small>Uploaded {{ event.uploaded }}</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/firebaseInit.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      errors: [],
      recent: []
    };
  },
  created() {
    db.collection("events")
      .orderBy("event.SubmitDate")
      .limit(6)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let event = doc.data().event;
          let end = "";

          if (event.description.length > 200) {
            end = ". . .";
          }

          let data = {
            id: doc.id,
            title: event.title,
            desc: event.description.substring(0, 200) + end,
            uploaded: event.SubmitDate
          };

          this.recent.push(data);
        });
      });
  }
};
</script>

<style scoped>
#recent-events {
  overflow-y: scroll;
  max-height: 360px
}

#recent-events .card {
  min-width: 280px;
  text-decoration: none;
}
</style>
