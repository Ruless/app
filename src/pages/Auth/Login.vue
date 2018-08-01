<template>
  <q-page>
    <img alt="Arbex" class='logo' src="~assets/logo.png">
    <h1 class='header'>Login</h1>
      <form class="form">
              <q-input 
                v-model="email" 
                class='form__input' 
                placeholder='Email' 
                inverted  
                type="email"
                autocomplete='false' 
                :before="[{icon: 'mail', handler () {}}]" 
              />
              <q-input 
                v-model="password" 
                class='form__input' 
                placeholder='Password' 
                inverted  
                type="password" 
                :before="[{icon: 'lock', handler () {}}]" 
              />
      </form>
      <!-- <span > -->
        <router-link tag='span' class='forgot_button' to='/' >Frogot password?</router-link>
        
       
    <div class="button_group">
      <q-btn 
        color="primary" 
        aria-label="Menu"
        @click.prevent='login' 
        class='button_group__button'> Continue
      </q-btn>
  
    </div>

    <p class='question'>Don’t have account?<router-link tag='span' class='forgot_button' to='/registration' > Register</router-link></p>
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

<style lang='stylus'>

</style>
