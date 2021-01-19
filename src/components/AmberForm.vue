<template>
    <div>
        <ncform :form-schema='formObj.form' form-name='amber-form' v-model='formObj.form.value' @change='onChange'></ncform>
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
      this.$store.dispatch('forms/storeFormValue', formValue)
    }
  }
}
</script>
