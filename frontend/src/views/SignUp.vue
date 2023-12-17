<template>
  <main class="signUpForm">
    <sign-up-form />
  </main>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
export default {
  name: "SignUp",
  components: {
    SignUpForm,
  },
};
</script>
<style lang="scss">
.signUpForm {
  display: block;
  margin: 10px 30px;
  padding: 15px 15px;
  background-color: lightgoldenrodyellow;
}
</style>
