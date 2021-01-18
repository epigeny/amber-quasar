<template>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6"
            v-for="formGroup in forms"
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
</template>

<script>
import QuestionnaireItem from 'components/QuestionnaireItem.vue'

const formsData =
  [
    {
      title: 'Questionnaires',
      forms: [
        {
          id: 'q1',
          title: 'Socio-demographic and economic characteristics',
          description: 'Refers to sociodemographic and economic characteristics of an individual.',
          date: '',
          link: 'form',
          icon: 'face',
          color: 'primary'
        },
        {
          id: 'q2',
          title: 'Lifestyle and health behaviours',
          description: 'Refers to information about past and current lifestyle, behaviours, activities and life plans.',
          date: '',
          link: 'form',
          icon: 'health_and_safety',
          color: 'teal'
        },
        {
          id: 'q3',
          title: 'Reproduction',
          description: 'Information about current or past reproductive health.',
          date: '',
          link: 'form',
          icon: 'pregnant_woman',
          color: 'orange'
        }
      ]
    },
    {
      title: 'Past questionnaires',
      forms: [
        {
          id: 'q4',
          title: 'Personal information',
          description: 'Refers to sociodemographic and economic characteristics of an individual.',
          date: 'March 2nd, 2019',
          link: 'data',
          icon: 'face'
        },
        {
          id: 'q5',
          title: 'Nutrition',
          description: 'Food and drink habits.',
          date: 'February 22, 2019',
          link: 'data',
          icon: 'fastfood'
        },
        {
          id: 'q6',
          title: 'Sleep',
          description: 'Sleep quality.',
          date: 'January 15th, 2019',
          link: 'form',
          icon: 'bedtime'
        }
      ]
    }
  ]

export default {
  name: 'Dashboard',
  components: { QuestionnaireItem },
  data () {
    return {
      forms: formsData
    }
  }
}
</script>
