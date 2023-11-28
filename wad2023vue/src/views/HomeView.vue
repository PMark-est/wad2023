<template>
  <main>
    <aside></aside>
    <div class="home">
      <ul class="posts">
        <li class="post" v-for="post in posts" :key="post.id">
          <post-content :post="post" />
        </li>
      </ul>
      <button v-on:click="ResetLikes">Reset likes</button>
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
