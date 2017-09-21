<template>
    <footer>
        {{copyright}}
    </footer>
</template>

<script>
// Imports
export default {
    data() {
        return {
            copyright: 'Copyright 2017 Quiz ShowDown'
           
        }    
    },
    methods: {
       
    }
}
</script>

<style scoped>
footer{
    background-color: #333;
    overflow: hidden;

}

</style>