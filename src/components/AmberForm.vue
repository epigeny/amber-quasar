<template>
    <div>
        <ncform :form-schema='formSchema' form-name='amber-form' v-model='formSchema.value' @submit='submit()' @change='onChange'></ncform>
        <q-btn class='q-mt-lg q-mr-md' color='secondary' label='Previous' icon='chevron_left' @click='previous()'/>
        <q-btn class='q-mt-lg q-mr-md' color='secondary' label='Next' icon-right='chevron_right' @click='next()'/>
        <q-btn class='q-mt-lg' color='primary' label='Submit' icon-right='send' @click='submit()'/>
    </div>
</template>

<script>
export default {
  name: 'AmberForm',
  props: {
    formSchema: {
      type: Object
    }
  },
  methods: {
    onChange ({ paths, itemValue, formValue, oldItemValue }) {
    },
    submit () {
      this.$ncformValidate('amber-form').then(data => {
        if (data.result) {
          console.log(this.formSchema.value)
          // do what you like to do
        }
      })
    },
    next () {
      this.formSchema.value._page = this.formSchema.value._page + 1
    },
    previous () {
      this.formSchema.value._page = this.formSchema.value._page - 1
    }
  }
}
</script>
