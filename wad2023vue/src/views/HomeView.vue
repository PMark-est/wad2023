<template>
  <main>
    <aside></aside>
    <div class="home">
      <button v-on:click="Logout">Log out</button>
      <ul class="posts">
        <li class="post" v-for="post in posts" :key="post.id">
          <a :href="'/api/posts/' + post.id">
            <post-content :post="post" />
          </a>
        </li>
      </ul>
      <button v-on:click="ResetLikes">Reset likes</button>
      <button v-on:click="Addpost">Add post</button>
      <button v-on:click="Deleteall">Delete all</button>
    </div>
    <aside></aside>
  </main>
</template>
<script>
import PostContent from "../components/Post.vue";
export default {
  name: "HomeView",
  components: {
    PostContent,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    ResetLikes: function () {
      this.$store.dispatch("ResetLikesAct");
    },
    Addpost() {},
    Deleteall() {},
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: "include", //  Don't forget to specify this if you need cookies
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("jwt removed");
          //console.log('jwt removed:' + auth.authenticated());
          this.$router.push("/login");
          //location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/getPosts`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
  updated() {
    this.fetchPosts();
    console.log("updated");
  },
};
</script>
<style lang="scss">
main {
  display: flex;
  overflow: hidden;
}
aside {
  width: 10vw;
  margin: 2%;
  border-radius: 8px;
  background: darkgray;
}

.posts {
  width: 60vw;
  overflow-y: scroll;
}
.post {
  width: 98%;
  list-style-type: none;
  background-color: lightgray;
  margin-bottom: 32px;
}
.home {
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  > button {
    padding: 12px;
    background: darkgray;
    border: none;
    border-radius: 8px;
    width: 40%;
    margin: auto;
    margin-bottom: 8px;
  }
}
</style>
