<template>
  <div>
    <h2>Quiz Creator</h2>
    <form>
      <label>Quiz Name:</label>
      <input type="text" placeholder="Name your quiz" required/>
      <br>
      <labe>Quiz Category</labe>
      <select v-model="formData.category">
        <option v-for="cat in quizCategories">{{cat.name}} </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        category: '',
        difficulty: '',
        amount: '',
        type: '',
      },
      quizCategories: [{
        name: 'General Knowledge',
        value: '9',
      }, {
        name: 'Books',
        value: '10',
      }, {
        name: 'Films',
        value: '11',
      }, {
        name: 'Music',
        value: '12',
      }, {
        name: 'Musicals',
        value: '13',
      }, {
        name: 'Television',
        value: '14',
      }, {
        name: 'Video games',
        value: '15',
      }, {
        name: 'Board Games',
        value: '16',
      }, {
        name: 'Science and Nature',
        value: '17',
      }, {
        name: 'Computers',
        value: '18',
      }, {
        name: 'Mathematics',
        value: '19',
      }, {
        name: 'Mythology',
        value: '20',
      }, {
        name: 'Sports',
        value: '21',
      }, {
        name: 'Geography',
        value: '22',
      }, {
        name: 'History',
        value: '23',
      }, {
        name: 'Politics',
        value: '24',
      }, {
        name: 'Art',
        value: '25',
      }, {
        name: 'Celebrities',
        value: '26',
      }, {
        name: 'Animals',
        value: '27',
      }, {
        name: 'Music',
        value: '28',
      }, {
        name: 'Vehicles',
        value: '29',
      }, {
        name: 'Comics',
        value: '30',
      }, {
        name: 'Gadgets',
        value: '31',
      }, {
        name: 'Anime',
        value: '32',
      }, {
        name: 'Science and Nature',
        value: '33',
      }, {
        name: 'Cartoons',
        value: '34',
      },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
