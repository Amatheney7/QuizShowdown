<template>
  <div>
    <div v-if="!quiztime">
      <h2>Quiz Creator</h2>
      <form>
        <label>Quiz Name:</label>
        <input type="text" v-model="formData.name" placeholder="Name your quiz" required/>
        <br>
        <label>Quiz Category</label>
        <select v-model="formData.category">
          <option v-for="cat in quizCategories" required>{{cat.value}}.{{cat.name}} </option>
        </select>
        <br>
        <label>Quiz Difficulty</label>
        <select v-model="formData.difficulty" required>
          <option v-for="level in quizDifficulty">{{level}} </option>
        </select>
        <br>
        <label>Number of Questions</label>
        <input type="number" v-model="formData.amount" min="1" max="50" required/>
      </form>
      <button v-on:click="quizStart()">Create Quiz</button>
    </div>
    <div v-if="quiztime">
      <h1>The {{formData.name}} Quiz</h1>
      <br>
      <h3>Question {{count + 1}}<br>{{quiz[count].category}}</h3>
      <br>
      <h5>{{question}}</h5>
      <br>
      <form class="questions">
        <div v-for="answer in answers">
          <input type="radio" v-bind:value="answer" v-model="choice"/>
          <label>{{answer}}</label>
        </div>
      </form>
      <button  v-if="count + 1 < formData.amount" v-on:click="qNext()">Final Answer</button>
      <button  v-if="count + 1 >= formData.amount && res" v-on:click="qresult()">Results</button>
      <div v-if="result">
        <p>You got {{score}} questions correct</p>
      </div>
      <div v-if="doOver">
        <button v-on:click="newQuiz()">New Quiz</button>
      </div>


      </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      doOver: false,
      result: false,
      res: true,
      choice: '',
      answers: [],
      score: 0,
      count: 0,
      quiztime: false,
      quiz: {},
      formData: {
        name: '',
        category: '',
        difficulty: '',
        amount: '',
      },
      quizDifficulty: [
        'easy',
        'medium',
        'hard',
      ],
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
  methods: {
    shuffle(array) {
      let currentIndex = array.length;
      let temporaryValue;
      let randomIndex;
      const temp = array.slice(0);
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = temp[currentIndex];
        temp[currentIndex] = temp[randomIndex];
        temp[randomIndex] = temporaryValue.replace(/&#039;|&quot;/gi, () => "'");
      }
      return temp;
    },
    quizStart() {
      this.$http.get('https://opentdb.com/api.php',
        {
          params: {
            amount: this.formData.amount,
            category: this.formData.category.split('.')[0],
            difficulty: this.formData.difficulty,
            type: 'multiple',

          },
        },
      ).then((response) => {
        if (response.body.results.length === 0) {
          response.reload('/quizType');
        } else {
          this.populateQuiz = true;
          this.quiz = response.body.results;
          this.quiztime = true;
          this.question = this.quiz[this.count].question;
          this.question = this.question.replace(/&#039;|&quot;/gi, () => "'");
          this.answers = [this.quiz[this.count].correct_answer,
            this.quiz[this.count].incorrect_answers[1],
            this.quiz[this.count].incorrect_answers[2],
            this.quiz[this.count].incorrect_answers[0]];
        }
      });
    },
    qNext() {
      if (this.count === 0) {
        this.score = 0;
      }
      if (this.choice === this.quiz[this.count].correct_answer) {
        this.score += 1;
      }
      if (this.count + 1 >= this.formData.amount) {
        this.quiztime = false;
        this.count = 0;
      } else {
        this.count += 1;
        this.answers = [this.quiz[this.count].correct_answer,
          this.quiz[this.count].incorrect_answers[1],
          this.quiz[this.count].incorrect_answers[2],
          this.quiz[this.count].incorrect_answers[0]];
        this.answers = this.shuffle(this.answers);
        this.question = this.quiz[this.count].question;
        this.question = this.question.replace(/&#039;|&quot;/gi, () => "'");
      }
    },
    qresult() {
      if (this.choice === this.quiz[this.count].correct_answer) {
        if (this.count + 1 <= this.formData.amount) {
          this.score += 1;
        }
      }
      this.result = true;
      this.doOver = true;
      this.res = false;
    },
    newQuiz() {
      this.question = '';
      this.doOver = false;
      this.score = 0;
      this.result = false;
      this.choice = '';
      this.answers = [];
      this.score = 0;
      this.count = 0;
      this.quiztime = false;
      this.quiz = {};
      this.res = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
