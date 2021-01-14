<template>
  <q-item clickable :to="link" v-ripple>
    <q-item-section avatar top>
      <q-avatar :icon="icon" :color="color" text-color="white" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">{{ title }}</q-item-label>
      <q-item-label caption>{{ date }}</q-item-label>
      <q-item-label caption>{{ description }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-icon v-if="!date" name="play_arrow" color="teal"/>
      <q-icon v-else name="visibility" color="primary"/>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'QuestionnaireItem',
  props: {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      default: ''
    },

    date: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: 'assignment'
    },

    color: {
      type: String,
      default: 'grey'
    }
  }
}
</script>
