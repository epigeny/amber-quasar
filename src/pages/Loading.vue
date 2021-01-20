<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <q-spinner
            v-if="formsLoading"
            color="primary"
            size="5.5em"
            :thickness="10"
        />
      <div style="font-size: 20vh">
        ...
      </div>
      <div class="text-h5 q-mt-xl" style="opacity:.4">
        <span v-if="profileLoading">
          Loading profile...
        </span>
        <span v-else-if="formsLoading">
          Loading data...
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  mounted () {
    // load the user's data
    this.$store.dispatch('profile/loadProfile').then(response => {
      // load the user forms data
      this.$store.dispatch('forms/loadForms')
    })
  },
  computed: {
    profileLoading: {
      get () {
        return this.$store.getters['profile/loading']
      }
    },
    formsLoading: {
      get () {
        return this.$store.getters['forms/loading']
      }
    }
  },
  watch: {
    formsLoading (newValue, oldValue) {
      if (!newValue) {
        this.$router.push('/')
      }
    }
  }
}
</script>
