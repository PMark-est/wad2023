<template>
  <header class="header">
    <img v-bind:src="post.headerUserImg" class="pfp" />
    <p class="date">{{ post.headerDate }}</p>
  </header>
  <article>
    <img v-for="image in images" :key="image.id" v-bind:src="image" alt="" />
    {{ post.content }}
  </article>
  <footer class="footer">
    <span>
      <button v-on:click="IncrementLikes(post.articleId)">
        <img src="../assets/like.png" alt="" />
      </button>
      <p>{{ post.likes }}</p>
    </span>
  </footer>
</template>
<script>
export default {
  name: "PostContent",
  props: ["post", "images"],
  methods: {
    fetchImages() {
      fetch(`http://localhost:3000/api/images/${this.post.id}`)
        .then((response) => response.json())
        .then((data) => (this.images = data))
        .catch((err) => console.log(err.message));
    },

    IncrementLikes: function (id) {
      this.$store.dispatch("IncrementLikesAct", id);
    },
  },
  mounted() {
    this.fetchImages();
    console.log("mounted");
  },
  updated() {
    this.fetchImages();
    console.log("updated");
  },
};
</script>
<style lang="scss">
$diameter: 40px;
.header {
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  padding: 0 8px;
}
article {
  text-align: justify;
  margin: 10px 20px;
  img {
    display: block;
    max-width: 100%;
    margin-bottom: 30px;
  }
}
.footer {
  all: unset;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  span {
    display: flex;
    gap: 25px;
    button {
      border: none;
      background: none;
    }
  }
  > button {
    border-radius: 10px;
    border: none;
    background: gray;
    margin: 5px 0;
    &:hover {
      background: darkgray;
    }
  }
  img {
    width: $diameter;
    height: $diameter;
  }
}

.pfp {
  width: $diameter;
  height: $diameter;
  border-radius: 50%;
  margin-left: 5px;
}
</style>
