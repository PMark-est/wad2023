<template lang="">
  <header id="mainHeader">
    <nav>
      <a href="index.html">Home</a>
    </nav>
    <img class="userpfp" src="../images/user.jpg" alt="" />
  </header>
  <main>
    <form action="index.html" method="get">
      <div>
        <label for="postbody">Post body: </label>
        <textarea id="postbody" name="postbody"></textarea>
      </div>
      <div>
        <label for="myfile">Select a file:</label>
        <input type="file" id="myfile" name="myfile" width="30px" />
      </div>
      <button type="submit">Create post</button>
    </form>
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss">
main {
  width: 250px;
  margin: auto;
  background-color: lightgray;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
form div {
  display: flex;
}
textarea {
  width: 100%;
  height: 250px;
}
input {
  width: 100%;
}
</style>
