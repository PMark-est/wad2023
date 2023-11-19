<template>
  <div class="signUpForm">
    <form ref="form" @submit.prevent="validateAndSubmit">
      <ul class="input-group">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" required /><br />
      </ul>
      <ul class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          v-model="password"
          required
          @input="clearInvalidPasswordMessage"
        />
      </ul>
      <br />
      <button type="submit">Sign up</button>
      <p id="invalidPasswordMessage" v-if="showInvalidPasswordMessage">
        <strong>Invalid password!</strong><br />
        The password should:<br />
        - Be <strong> 8-14 </strong> characters long,<br />
        - Contain at least <strong>1 uppercase letter</strong>,<br />
        - Contain at least <strong>2 lowercase letters</strong>,<br />
        - Contain at least <strong>1 digit</strong>,<br />
        - Start with <strong>1 uppercase letter</strong>,<br />
        - Contain at least <strong>1 underscore</strong> ('_').
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "signUpForm",

  data() {
    return {
      password: "",
      showInvalidPasswordMessage: false,
    };
  },

  methods: {
    validatePassword() {
      const regexPassword =
        /^(?=.*[A-Z])(?=(?:.*[a-z]){2,})(?=.*\d)(?=.*_)[A-Z][\w\d]{7,14}$/;
      return regexPassword.test(this.password);
    },
    validateAndSubmit() {
      if (!this.validatePassword()) {
        this.showInvalidPasswordMessage = true;
      } else {
        this.$refs.form.submit();
      }
    },
    clearInvalidPasswordMessage() {
      if (this.showInvalidPasswordMessage) {
        this.showInvalidPasswordMessage = false;
      }
    },
  },
};
</script>

<style scoped, lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-radius: 20px;
}

.signUpForm {
  margin: 10px 30px;
  padding: 15px 15px;
  background-color: lightgoldenrodyellow;
}

.input-group {
  padding: 0px 150px;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
}

label {
  margin-right: 20px;
  width: 100px;
  text-align: right;
}

input {
  flex: 1; // fill remaining pace in the flex container
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 5px 0;
  // text-align: center; // it is centered in the instructions, but looks better left-aligned
}

button {
  background-color: lightblue;
  border-radius: 20px;
  border: none;
  padding: 8px 15px;
}

#invalidPasswordMessage {
  color: red;
  background-color: rgb(255, 180, 180);
  text-align: left;
  width: fit-content;
  justify-self: center;
  padding: 15px;
  margin: 15px auto; // auto centers the message box within its parent container
  border-radius: 5px;
}
</style>
