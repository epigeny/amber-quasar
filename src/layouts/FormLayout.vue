<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          {{ form.title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
      <q-btn class='q-mt-lg' color='primary' label='Submit' icon-right='send' @click='submit()'/>
        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
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
  },
  methods: {
    submit () {
      this.$ncformValidate('amber-form').then(data => {
        if (data.result) {
          console.log(this.formValue)
          // do what you like to do
        }
      })
    }
  }
}
</script>
