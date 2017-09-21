<template>
  <div id="app">
  <navbar></navbar>
    <router-view></router-view>
    
    
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  components: {
    navbar: NavBar,
    footerbar: Footer,
  },
  data() {
    return {
      msg: 'testing',
    };
  },
  methods: {
  },
};
</script>

<style>

</style>
