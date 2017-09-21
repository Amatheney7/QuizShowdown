<template>
  <div>
      <form action='/signup' method='POST'>
    Username:
    <input type='text' name='username'>
    Password:
    <input type='text' name='password'>
    <button type="submit">Signup</button>

</form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
