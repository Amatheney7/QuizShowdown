<template>
    <div>
        <div class="topnav" id="myTopnav">
            <router-link to="/home">Home</router-link>
            <router-link to="/leaderBoard">LeaderBoard</router-link>
            <router-link to="/login">Login/signup</router-link>
            <router-link to="/stats">Stats</router-link>
            <router-link to="/quizType">Choose Quiz</router-link>
        </div>

    </div>
</template>

<script>
// Imports
export default {
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style scoped>
.topnav {
    background-color: #333;
    overflow: hidden;
    padding-top: 70px;
}


/* Style the links inside the navigation bar */

.topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}


/* Change the color of links on hover */

.topnav a:hover {
    background-color: #ddd;
    color: black;
}


/* Add a color to the active/current link */

.topnav a.active {
    background-color: #4CAF50;
    color: white;
}
</style>