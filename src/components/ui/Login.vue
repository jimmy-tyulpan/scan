<template>
    <div id="login-wrapper">
        <h2>Login</h2>
        <div class="inputs">
            <div class="in-log">
                <input id="login" type="text" v-model="login">
            </div>
            <div class="in-pass">
                <input id="password" type="password" v-model="password">
            </div>
            <div class="login-button" @click="authorize">
                Login
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          login: null,
          password: null
        }
      },
      methods: {
        authorize(){
          if (this.login && this.password) {
            this.$store.dispatch('login', {login: this.login, password: this.password})
          } else {
            alert(this.$t('notify.empty'))
          }
        }
      }
    }
</script>

<style scoped>
    #login-wrapper {
        width: 12%;
        margin: 20px auto;
        text-align: center;
    }
    .inputs div:not(:first-child) {
        margin-top: 20px;
    }
    .login-button {
        background-color: #dddddd;
        padding: 5px;
        border-radius: 3px;
        cursor: pointer;
    }
</style>