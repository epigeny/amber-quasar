<template>
    <q-list bordered padding >
      <q-item-label header>Questionnaires</q-item-label>

      <QuestionnaireItem
          v-for="quest in liveQuestionnaires"
          :key="quest.title"
          v-bind="quest"
        />

      <q-separator spaced />
      <q-item-label header>Past Questionnaires</q-item-label>

      <QuestionnaireItem
          v-for="quest in pastQuestionnaires"
          :key="quest.title"
          v-bind="quest"
        />

    </q-list>
</template>

<script>
import QuestionnaireItem from 'components/QuestionnaireItem.vue'

const liveQuestData = [
  {
    title: 'Socio-demographic and economic characteristics',
    description: 'Refers to sociodemographic and economic characteristics of an individual.',
    date: '',
    link: 'form',
    icon: 'face',
    color: 'primary'
  },
  {
    title: 'Lifestyle and health behaviours',
    description: 'Refers to information about past and current lifestyle, behaviours, activities and life plans.',
    date: '',
    link: 'form',
    icon: 'health_and_safety',
    color: 'teal'
  },
  {
    title: 'Reproduction',
    description: 'Information about current or past reproductive health.',
    date: '',
    link: 'form',
    icon: 'pregnant_woman',
    color: 'orange'
  }
]

const pastQuestData = [
  {
    title: 'Personal information',
    description: 'Refers to sociodemographic and economic characteristics of an individual.',
    date: 'March 2nd, 2019',
    link: 'data',
    icon: 'face'
  },
  {
    title: 'Nutrition',
    description: 'Food and drink habits.',
    date: 'February 22, 2019',
    link: 'data',
    icon: 'fastfood'
  },
  {
    title: 'Sleep',
    description: 'Sleep quality.',
    date: 'January 15th, 2019',
    link: 'form',
    icon: 'bedtime'
  }
]

export default {
  name: 'Dashboard',
  components: { QuestionnaireItem },
  data () {
    return {
      liveQuestionnaires: liveQuestData,
      pastQuestionnaires: pastQuestData
    }
  }
}
</script>
