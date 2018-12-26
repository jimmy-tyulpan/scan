<template>
    <div>
        <button v-if="$store.getters.isLoggedIn" @click="$store.commit('unLogin')">Log Out</button>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {};
</script>

<style scoped>
    button {
        position: absolute;
        right: 10%;
    }
</style>