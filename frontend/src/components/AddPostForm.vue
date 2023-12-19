<template>
  <div class="bodyWrapper">
    <main id="mainAddPost">
      <div class="formWrapper">
        <form action="#">
          <h1>Add Post</h1>
          <span id="input">
            <label for="">Body</label>
            <input type="text" name="" v-model="body" placeholder="body" />
          </span>
          <button type="submit" @click="AddPost">Add</button>
        </form>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "viewPost",
  data() {
    return {
      body: "",
    };
  },
  methods: {
    AddPost() {
      if (this.body.length === 0) return;
      var data = {
        authorname: "newUserPost",
        userimg: "pfpNewUser",
        content: this.body,
      };
      fetch("http://localhost:3000/api/addPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
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
    button {
      width: 150px;
      margin: auto;
      margin-top: 10px;
    }
  }
}
#input {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  input {
    width: 50%;
    text-align: center;
  }
}
</style>
