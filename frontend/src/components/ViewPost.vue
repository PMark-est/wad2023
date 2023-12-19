<template>
  <div class="bodyWrapper">
    <main id="mainAddPost">
      <div class="formWrapper">
        <form action="#">
          <h1>A Post</h1>
          <span id="input">
            <label for="">Body</label>
            <input type="text" name="" id="" placeholder="body" />
          </span>
          <span id="buttons">
            <button type="submit">Update</button>
            <button type="submit">Delete</button>
          </span>
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
  gap: 50px;
  margin: 10px auto;
  button {
    width: 150px;
  }
}
</style>
