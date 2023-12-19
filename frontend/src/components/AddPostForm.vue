<template>
  <div class="bodyWrapper">
    <main id="mainAddPost">
      <div class="formWrapper">
        <form action="#">
          <h1>Add Post</h1>
          <span id="input">
            <label for="">Body</label>
            <input type="text" name="" id="" placeholder="body" />
          </span>
          <button type="submit">Add</button>
        </form>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "viewPost",
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
