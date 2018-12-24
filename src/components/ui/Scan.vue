<template>
    <div>
        <div id="app">
            <Scanner @scan="setRedirect" @error="showError" />
        </div>
    </div>
</template>

<script>
  import Scanner from './Scanner.vue';

  export default {
    components: {
      Scanner,
    },
    methods: {
      setRedirect(scan) {
        if (scan) {
          this.$router.push({path: 'result', query: {data: scan.content}});
        }
      },
      showError(error) {
        alert(error);
      },
    },
  };
</script>

<style scoped>

</style>
