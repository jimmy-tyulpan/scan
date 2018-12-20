<template>
    <div>
        <scanner></scanner>
        <div id="app">
            <img src="./assets/logo.png">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Scanner from '../components/ui/Scanner.vue'

    export default {
        name: 'App',
        components: {
            'scanner': Scanner
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
