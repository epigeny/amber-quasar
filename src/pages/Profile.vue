<template>
  <q-page class="flex flex-center">
    <div class="text-center">
    <div v-if="profile.id">
      <p><img :src="profile.picture" ></p>
      <p>{{profile.name}}</p>
    </div>
    <div v-else>
        <div class="q-title">No profile</div>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      profile: {}
    }
  },
  mounted () {
    this.getProfile('facebook')
  },
  methods: {
    getProfile (network) {
      if (this.$hello.getAuthResponse(network) == null) {
        return
      }
      this.$hello(network).api('me')
        .then((res) => {
          console.log(res)
          this.profile = res
        })
    }
  }
}
</script>
