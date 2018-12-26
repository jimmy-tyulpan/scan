<template>
    <div id="scan-result">
        <h2>{{$t('result.header')}}</h2>
        <div>
            <span>{{$store.getters.getCode}}</span>
        </div>
        <div id="reset-button">
            <button @click="backToScan">{{$t('scan.button.reset')}}</button>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      backToScan() {
        this.$store.dispatch('resetCode', null)
        this.$router.back()
      },
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

    #reset-button button {
        margin-top: 20px;
        padding: 10px;
        border: none;
        color: #ffffff;
        border-radius: 3px;
        background-color: #228B22;
        cursor: pointer;
    }
</style>