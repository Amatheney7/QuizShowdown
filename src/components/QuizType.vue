<template>
  <div>
    <form action="">
    <div >
        <div>
            Quiz Topics:
            <select ></select>
            <br/>
        </div>
    </div>
<div>
       # of Questions: <input v-model="numOfQuestions">
    (1 - 50)
</div>

<div>
   
        <input type="radio" name="difficulty" value="Easy"> Easy<br>
        <input type="radio" name="difficulty" value="Medium"> Medium<br>
        <input type="radio" name="difficulty" value="Hard"> Hard<br>
   
</div>
</form>

<form action='/answer' method='POST'>

    <button type="button" >Take on the world</button>
    <button type="button" > Take a friend down a peg</button>
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
