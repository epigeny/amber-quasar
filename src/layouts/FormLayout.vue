<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Amber
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'FormLayout',
  computed: {
    form: function () {
      const formObj = this.$store.getters['forms/formById'](this.$route.params.id)
      return JSON.parse(JSON.stringify(formObj))
    },
    formValue: {
      get () {
        return this.$store.getters['forms/formValue']
      }
    },
    realm: {
      get () {
        return this.$store.getters['profile/realm']
      }
    }
  },
  mounted () {
    if (this.realm === undefined) {
      this.$router.push('/login')
    }
  }
}
</script>
