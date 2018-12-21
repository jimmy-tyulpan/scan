<template>
    <div id="app">
        <scanner v-show="mode" videoId="preview" v-on:qrScaned="setContent"></scanner>
        <div id="scan-result" v-show="!mode">
            <h2>Result</h2>
            <div>
                <span>{{content}}</span>
            </div>
            <div id="reset-button">
                <button @click="changeMode();startCamera()">Reset</button>
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
                content: '',
                scanner: null
            }
        },
        methods: {
            setContent(scan){
                if (scan) {
                    this.changeMode();
                    this.content = scan.content;
                    this.scanner = scan.scanner;
                    this.camera = scan.camera;
                    this.scanner.stop();
                }
            },
            changeMode(){
                this.mode = !this.mode;
            },
            startCamera(){
                this.scanner.start(this.scanner.camera);
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
