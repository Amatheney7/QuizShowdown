<template>
  <div>
    <div>
      <p>{{question.question}}</p>

    </div>
    <div>
      <form>
        <input type="radio" value="question.incorrect_answers[0]"> {{question.incorrect_answers[0]}}<br>
        <input type="radio" value="question.incorrect_answers[1]"> {{question.incorrect_answers[1]}}<br>
        <input type="radio"  value="question.correct_answer"> {{question.correct_answer}}<br>
        <input type="radio" value="question.incorrect_answers[2]"> {{question.incorrect_answers[2]}}<br>
      </form>

    </div>
  
  <button>Submit</button>
  

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
