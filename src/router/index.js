import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import LeaderBoard from '@/components/LeaderBoard';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import QuizType from '@/components/QuizType';
import Stats from '@/components/Stats';
import Win from '@/components/Win';
import Loss from '@/components/Loss';
import Quiz from '@/components/Quiz';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/leaderBoard',
      component: LeaderBoard,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/stats',
      component: Stats,
    },
    {
      path: '/quizType',
      component: QuizType,
    },
    {
      path: '/signUp',
      component: SignUp,
    },
    {
      path: '/win',
      component: Win,
    },
    {
      path: '/loss',
      component: Loss,
    },
    {
      path: '/quiz',
      component: Quiz,
    },


  ],
});
