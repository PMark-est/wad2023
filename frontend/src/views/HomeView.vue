<template>
  <div class="bodyWrapper">
    <aside></aside>
    <main class="home">
      <button v-on:click="Logout">Log out</button>
      <ul class="posts">
        <li class="post" v-for="post in posts" :key="post.id">
          <post-content :post="post" />
        </li>
      </ul>
      <span id="homeButtons">
        <!--<button v-on:click="ResetLikes">Reset likes</button>-->
        <button @click="$router.push('/addPost')">Add post</button>
        <button @click="Deleteall">Delete all</button>
      </span>
    </main>
    <aside></aside>
  </div>
</template>
<script>
import PostContent from "../components/Post.vue";
export default {
  name: "HomeView",
  components: {
    PostContent,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    ResetLikes: function () {},
    Deleteall() {
      fetch("http://localhost:3000/api/deletePosts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          //console.log(response.data);
          //this.$router.push("/api/allposts");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
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
        .then((data) => {
          this.posts = data;
        })
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
    //console.log("mounted");
  },
};
</script>
<style lang="scss">
.posts {
  overflow-y: scroll;
  padding: 0;
  margin: 0 0 8px 0;
  width: 75%;
  border-radius: 12px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
.post {
  list-style-type: none;
  background-color: lightgray;
  margin-bottom: 20px;
  border-radius: 12px;
  a {
    text-decoration: none;
    color: inherit;
  }
}
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  button {
    width: 100px;
    margin-bottom: 8px;
  }
  #homeButtons {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
