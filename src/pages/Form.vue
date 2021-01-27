<template>
  <q-page class="q-pa-md">
    <h5 class="q-mt-sm q-mb-sm q-ml-md">{{ form.title }}</h5>
    <p class="text-weight-light q-ml-md">{{ form.description }}</p>
    <nc-form v-bind:formObj="form"/>
  </q-page>
</template>

<script>
import NcForm from 'src/components/NcForm.vue'

export default {
  components: { NcForm },
  name: 'PageForm',
  computed: {
    form: function () {
      const formObj = this.$store.getters['forms/formById'](this.$route.params.id)
      return JSON.parse(JSON.stringify(formObj))
    }
  }
}
</script>
