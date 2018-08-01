<template>
  <q-page>
    <img alt="Arbex" class='logo' src="~assets/logo.png">
    <form class="form-authorization">
      <h1 class='form-authorization__header'>Register</h1>
      <q-input 
        v-model="email" 
        class='form-authorization__input' 
        placeholder='Email' 
        inverted  
        type="email"
        autocomplete='false' 
        :before="[{icon: 'mail', handler () {}}]" 
      />
      <q-input 
        v-model="password" 
        class='form-authorization__input' 
        placeholder='Password' 
        inverted  
        type="password" 
        :before="[{icon: 'lock', handler () {}}]" 
      />
      <q-input 
        v-model="password" 
        class='form-authorization__input' 
        placeholder='Password' 
        inverted  
        type="password" 
        :before="[{icon: 'lock', handler () {}}]" 
      />
    </form>
              
    <div class="agree-checkbox">
      <q-checkbox v-model="accepted"  class="agree-checkbox__label" label="I have read and agree to the" />
      <router-link tag='span' class='forgot_button' to='/' >Terms of Service</router-link>
    </div>
        
       
    <div class="button_group">
      <q-btn 
        color="primary" 
        aria-label="Menu"
        @click.prevent='login' 
        class='button_group__button'> Continue
      </q-btn>
  
    </div>

    <p class='question'>Already have an account?<router-link tag='span' class='forgot_button' to='/login' > Login</router-link></p>
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
        password:'',
        accepted: false
      }
    },
    methods: {
      login() {
        // this.$router.push('/login')
        
      }
    }
  }
</script>

<style lang='scss' scoped>
.agree-checkbox {
    margin-top: 20px;
    margin-bottom: 15px;
    &__label {
        color: #6D6D74;
        font-size: 11px
    }   
}
// .header {
//   margin-top: 95px;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: bold;
//   line-height: normal;
//   font-size: 20px;
//   text-align: center;
//   color: #FFFFFF;
//   text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.5);
// }
// .form {
//   margin-top: 20px;
//   &__input {
//     background: #272B3C!important;
//     border: 1px solid #313D4F;
//     box-sizing: border-box;
//     border-radius: 3px;
    
//     padding-left: 15px;
//     &:not(:last-child) {
//         margin-bottom: 10px;
//     }
//     .q-icon {
//       margin-right: 10px 
//     }
//     input {
//         font-size: 12px
//         color: red
//     }
//   }

// }
.forgot_button {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 11px;
  margin-left: 10px;
  color: #FFFFFF;
  float: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.148975);
}
// .question {
//   margin-top: 20px;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   line-height: normal;
//   font-size: 12px;
//   text-align: center;
//   color: #6D6D74;
//   padding-bottom: 30px;
//   .forgot_button {
//     float none
//     margin-left 5px
//     font-size: 12px
//   }
// }
</style>
