<template>
  <q-page class="q-layout-page-login">

    <img alt="Arbex" class='logo' src="~assets/logo.png">
    <form class="form-authorization">
      <h1 class='form-authorization__header'>Reset Password</h1>
      <q-input 
        v-model="email" 
        class='form-authorization__input form-authorization__input--once' 
        placeholder='Email' 
        inverted  
        type="email"
        autocomplete='false' 
        :before="[{icon: 'mail', handler () {}}]" 
      />
    </form>
    <div class="button_group">
      <q-btn 
        color="primary" 
        aria-label="Menu"
        @click.prevent='login' 
        class='button_group__button'> Continue
      </q-btn>
  
    <p class='question'>Don’t have account?<router-link tag='span' class='forgot_button' to='/registration' > Register</router-link></p>
    </div>

  </q-page>
</template>

<style>
  
</style>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
        email: '',
        password:''
      }
    },
    methods: {
      login() {
        // this.$router.push('/login')
        
      }
    }
  }
</script>