<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signUp">Sign up</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss">
header {
  background: gray;
  border-radius: 0 0 16px 16px;
}
</style>
