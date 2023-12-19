<template>
  <div class="bodyWrapper" @submit.prevent="signIn">
    <main id="mainAddPost">
      <div class="formWrapper">
        <form ref="form" action="#">
          <h1>A Post</h1>
          <span id="input">
            <label for="">Body</label>
            <input
              type="text"
              v-model="body"
              name=""
              id=""
              placeholder="body"
            />
          </span>
          <span id="buttons">
            <button type="submit" @click="Update">Update</button>
            <button type="submit" @click="Delete">Delete</button>
          </span>
        </form>
      </div>
    </main>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "viewPost",
  data() {
    return {
      routeID: 0,
      body: "",
    };
  },
  methods: {
    async Update() {
      var newPostData = {
        body: this.body,
        id: this.routeID,
      };
      const post = await fetch(
        `http://localhost:3000/api/posts/${this.routeID}`
      )
        .then((res) => res.json())
        .then((data) => (newPostData.date = data.date));
      const newData = await fetch(`http://localhost:3000/api/post/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPostData),
      }).then((res) => this.$refs.form.submit());
    },
    async Delete() {
      var postData = {
        id: this.routeID,
      };
      const post = await fetch("http://localhost:3000/api/post/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }).then((res) => this.$refs.form.submit());
    },
  },
  mounted() {
    const route = useRoute();
    this.routeID = route.params.id;
  },
};
</script>
<style lang="scss">
.formWrapper {
  background-color: #ebf1df;
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 24px;
}
#mainAddPost {
  background-color: gray;
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 15vh auto;
  }
}
#input {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  input {
    width: 50%;
    text-align: center;
  }
}
#buttons {
  display: flex;
  gap: 30px;
  margin: 10px auto;
  button {
    width: 150px;
  }
}
</style>
