<template>
  <q-page class="q-layout-page-login">
    <img alt="Arbex" class='logo' src="~assets/logo.png">
    <div class="button_group">
      <q-btn
          color="secondary"
          aria-label="Menu"
          class='button_group__login'
          @click='login("/registration")'
      > Register</q-btn>
      <q-btn
          color="primary"
          aria-label="Menu"
          class='button_group__login'
          @click='login("/login")'
      >Login</q-btn>

    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    login(link) {
      this.$router.push(link)
    }
  }
}
</script>

<style lang='stylus'>
  

</style>
