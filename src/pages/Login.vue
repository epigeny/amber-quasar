<template>
  <q-page class='flex flex-center'>
    <div class="text-center">
    <img src="../assets/amber-logo-full.svg" width="130em" />

    <div class="q-pt-md q-pb-md">
      <q-form class="q-gutter-y-md column">
        <q-input v-model="identifier" label="User name or email" />
        <q-input v-model="secret" type="password" label="Password" />
        <q-btn
          color="primary"
          label="Login"
          size="md" @click="auth()" >
        </q-btn>
      </q-form>
    </div>
    <q-separator />

    <div class="q-pt-md q-pb-md">
      <div class="q-gutter-y-md column">
        <q-btn
            color="primary"
            icon="fab fa-facebook-square" label="Login with Facebook"
            size="md" @click="auth('facebook')" >
        </q-btn>
        <q-btn
            color="primary"
            icon="fab fa-google" label="Login with Google"
            size="md" @click="auth('google')" >
        </q-btn>
      </div>
    </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  mounted () {
    this.$store.dispatch('profile/storeRealm', undefined)
  },
  data () {
    return {
      identifier: '',
      secret: ''
    }
  },
  methods: {
    auth (network) {
      if (network) {
        this.$hello(network).login({ scope: 'email' })
          .then(() => {
            this.$store.dispatch('profile/storeRealm', network)
          })
          .then(() => {
            this.$router.push('/loading')
          })
      } else {
        this.$store.dispatch('profile/storeRealm', 'amber')
          .then(() => {
            this.$store.dispatch('profile/storeCredentials', {
              identifier: this.identifier,
              secret: this.secret
            })
          })
          .then(() => {
            this.$router.push('/loading')
          })
      }
    }
  }
}
</script>
