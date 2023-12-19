<template>
  <div class="contacts">
    <h3>Contacts</h3>
    <p><strong>Email:</strong> info@ourwebsite.com</p>
    <p><strong>Phone:</strong> +0 000 000 000</p>
    <p>
      <strong>Address: </strong> <br>
      Our Company Name<br />
      11 Street <br />
      Tartu, 1234<br />
      Estonia<br />
    </p>
  </div>
</template>

<script>
export default {
  name: "Contacts",
}
</script>

<style lang="scss">
.contacts {
    background-color: rgb(167, 154, 154);
    width: 350px;
    margin: auto;
    padding: 30px;
    border-radius: 5px;
    > h3, strong {
        color: rgb(8, 110, 110);
    }
}

</style>
