<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
  },
};
</script>

<style lang="scss">
body {
  padding: 0 !important;
  margin: 0 !important;
}
.bodyWrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
  margin: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    display: flex;
    flex: 1;
    overflow: hidden;
    flex-direction: column;
  }
  aside {
    background: darkgray;
    width: 10vw;
    border-radius: 8px;
  }
}
button {
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #8db1e2;
  &:hover {
    background-color: #7891b6;
  }
}

input {
  padding: 10px;
  border-radius: 8px;
  border: none;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
