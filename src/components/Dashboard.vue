<template>
    <div>
        <q-spinner
            v-if="formsLoading"
            color="primary"
            size="3em"
            :thickness="10"
        />
        <div class="row q-col-gutter-lg" v-else>
            <div class="col-12 col-md-6"
                    v-for="formGroup in formGroups"
                    :key="formGroup.title">
                <q-list bordered padding>
                    <q-item-label header>{{ formGroup.title }}</q-item-label>
                    <QuestionnaireItem
                    v-for="form in formGroup.forms"
                    :key="form.id"
                    v-bind="form"
                    />
                </q-list>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionnaireItem from 'components/QuestionnaireItem.vue'

export default {
  name: 'Dashboard',
  components: { QuestionnaireItem },
  computed: {
    formsLoading: {
      get () {
        return this.$store.getters['forms/loading']
      }
    },
    formGroups: {
      get () {
        return this.$store.getters['forms/formGroups']
      }
    }
  }
}
</script>
