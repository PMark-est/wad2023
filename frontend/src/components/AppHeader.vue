<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/contacts">Contacts</router-link>
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
