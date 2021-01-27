<template>
    <div>
      <ncform :form-schema='formObj.form' form-name='nc-form' v-model='formObj.form.value' @change='onChange'></ncform>
      <div class="text-center q-pa-md q-gutter-sm">
        <q-btn color="white" text-color="black" label="Cancel" icon-right="cancel" @click="alertCancel()"/>
        <q-btn color="secondary" label="Pause" icon-right="pause" @click="alertPause()" />
        <q-btn color="primary" label="Submit" icon-right="send" @click="submit()"/>

        <q-dialog v-model="canceled">
          <q-card>
            <q-card-section>
              <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Cancel questionnaire? Entered data will be lost.
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Dismiss" color="primary" v-close-popup />
              <q-btn flat label="OK" color="primary" v-close-popup @click="cancel()"/>
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="paused">
          <q-card class="bg-teal text-white">
            <q-card-section>
              <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Pause questionnaire? Entered data will be saved.
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="Dismiss" color="primary" v-close-popup />
              <q-btn flat label="OK" color="primary" v-close-popup @click="pause()"/>
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="failed">
          <q-card class="bg-primary text-white">
            <q-card-section>
              <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Validation failed. Please verify your answers.
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-blue">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NcForm',
  props: {
    formObj: {
      type: Object
    }
  },
  data () {
    return {
      failed: false,
      canceled: false,
      paused: false
    }
  },
  methods: {
    onChange ({ paths, itemValue, formValue, oldItemValue }) {
      this.$store.dispatch('forms/storeFormValue', formValue)
    },
    alertCancel () {
      this.canceled = true
    },
    cancel () {
      this.$router.push('/')
    },
    alertPause () {
      this.paused = true
    },
    pause () {
      this.$router.push('/')
    },
    submit () {
      this.$ncformValidate('nc-form').then(data => {
        if (data.result) {
          console.log(this.formObj.form.value)
          // do what you like to do
        } else {
          this.failed = true
        }
      })
    }
  }
}
</script>
