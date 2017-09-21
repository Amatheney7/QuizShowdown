<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <p>{{msg}}</p>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: [
    NavBar,
  ],
  data() {
    return {
      name: 'App',
      msg: 'testing',
    };
  },
  methods: {
  },
};
</script>

<style>

</style>
