<template>
  <q-page class='flex flex-center'>
    <div class="text-center">
    <img src="../assets/amber-logo-full.svg" width="130em" />
    <p class="q-pt-lg">
        <q-btn
            color="primary"
            icon="fab fa-facebook-square" label="Login with Facebook"
            size="md" @click="auth('facebook')" >
        </q-btn>
    </p>
    <p class="q-pt-lg">
        <q-btn
            color="primary"
            icon="fab fa-google" label="Login with Google"
            size="md" @click="auth('google')" >
        </q-btn>
    </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    auth (network) {
      this.$hello(network).login()
        .then(() => {
          // load the user's data
          this.$store.dispatch('forms/loadForms')
          this.$router.push('/')
        })
    }
  }
}
</script>
