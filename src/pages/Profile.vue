<template>
  <q-page class="flex flex-center">
    <div class="text-center">
    <div v-if="profile.id">
      <p><img :src="profile.picture" ></p>
      <p>{{profile.name}}</p>
      <p>{{profile.email}}</p>
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
  computed: {
    profile: {
      get () {
        return this.$store.getters['profile/profile']
      }
    }
  }
}
</script>
