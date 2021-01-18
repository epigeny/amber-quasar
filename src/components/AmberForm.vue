<template>
    <div>
        <ncform :form-schema='formObj.form' form-name='amber-form' v-model='formObj.form.value' @submit='submit()' @change='onChange'></ncform>
        <q-btn class='q-mt-lg q-mr-md' color='secondary' label='Previous' icon='chevron_left' @click='previous()'/>
        <q-btn class='q-mt-lg q-mr-md' color='secondary' label='Next' icon-right='chevron_right' @click='next()'/>
        <q-btn class='q-mt-lg' color='primary' label='Submit' icon-right='send' @click='submit()'/>
    </div>
</template>

<script>
export default {
  name: 'AmberForm',
  props: {
    formObj: {
      type: Object
    }
  },
  methods: {
    onChange ({ paths, itemValue, formValue, oldItemValue }) {
    },
    submit () {
      this.$ncformValidate('amber-form').then(data => {
        if (data.result) {
          console.log(this.formObj.form.value)
          // do what you like to do
        }
      })
    },
    next () {
      this.formObj.form.value._page = this.formObj.form.value._page + 1
    },
    previous () {
      this.formObj.form.value._page = this.formObj.form.value._page - 1
    }
  }
}
</script>
