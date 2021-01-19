<template>
  <q-page class='q-pa-sm'>
    <p>{{ form.description }}</p>
    <amber-form v-bind:formObj="form"/>
  </q-page>
</template>

<script>
import AmberForm from 'src/components/AmberForm.vue'

export default {
  components: { AmberForm },
  name: 'PageForm',
  computed: {
    form: function () {
      const formObj = this.$store.getters['forms/formById'](this.$route.params.id)
      return JSON.parse(JSON.stringify(formObj))
    }
  }
}
</script>
