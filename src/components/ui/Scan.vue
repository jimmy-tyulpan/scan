<template>
    <div id="app">
        <scanner v-show="mode" videoId="preview" v-on:qrScaned="setContent"></scanner>
        <div id="scan-result" v-show="!mode">
            <h2>Result</h2>
            <div>
                <span><a :href="content">{{content}}</a></span>
            </div>
            <div id="reset-button">
                <button v-on:click="changeMode">Reset</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Scanner from './Scanner.vue'

    export default {
        components: {
            'scanner': Scanner
        },
        data(){
            return {
                mode: true,
                content: ''
            }
        },
        methods: {
            setContent(content){
                if (content) {
                    this.changeMode();
                    this.content = content;
                }
            },
            changeMode(){
                this.mode = !this.mode;
            }
        }
    }
</script>

<style scoped>
    #scan-result {
        margin: 100px auto;
        width: 500px;
        text-align: center;
        font-weight: 200;
    }
    #reset-button button{
        margin-top: 20px;
        padding: 10px;
        border: none;
        color: #ffffff;
        border-radius: 3px;
        background-color: #228B22;
        cursor: pointer;
    }
</style>
