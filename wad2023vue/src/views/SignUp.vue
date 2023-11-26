<template>
  <div class="signUp">
    <!-- <header /> -->
    <sign-up-form />
    <!-- <footer /> -->
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
// import Header from "@/components/AppHeader.vue";
// import Footer from "@/components/AppFooter.vue";
export default {
  name: "SignUp",
  components: {
    SignUpForm,
    // Header,
    // Footer,
  },
};
</script>
