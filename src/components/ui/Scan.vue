<template>
    <div id="app">
        <Scanner @scan="setRedirect" @error="showError" />
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
          this.$store.dispatch('setCode', scan.content)
          this.$router.push('result')
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
