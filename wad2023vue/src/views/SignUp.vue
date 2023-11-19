<template>
  <div class="signUp">
    <!-- <header /> -->
    <sign-up-form />
    <!-- <footer /> -->
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
// import Header from "@/components/Header.vue";
// import Footer from "@/components/Footer.vue";
export default {
  name: "SignUp",
  components: {
    SignUpForm,
    // Header,
    // Footer,
  },
};
</script>
