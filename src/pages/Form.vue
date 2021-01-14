<template>
  <q-page class='q-pa-sm'>
    <amber-form v-bind:formSchema="aForm"/>
  </q-page>
</template>

<script>
import AmberForm from 'src/components/AmberForm.vue'

const aFormSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      ui: {
        label: 'Name',
        description: 'Please fill in your name.',
        placeholder: 'Name'
      },
      rules: {
        required: true,
        minLength: {
          value: 10,
          errMsg: 'Please fill in at least 10 chars'
        }
      }
    },
    count: {
      type: 'number',
      ui: {
        widget: 'input-number',
        label: 'Event count',
        description: 'Report the number of times it happened.'
      }
    },
    message: {
      type: 'string',
      ui: {
        widget: 'textarea',
        label: 'Comments',
        description: 'Any comment (optional).',
        placeholder: 'Some message'
      }
    },
    colors: {
      type: 'array',
      ui: {
        label: 'What color is it?',
        widget: 'checkbox',
        widgetConfig: {
          selectAll: false,
          arrangement: 'v',
          enumSource: [
            {
              value: 1,
              label: 'Red'
            },
            {
              value: 2,
              label: 'Green'
            },
            {
              value: 3,
              label: 'Blue'
            }
          ]
        }
      }
    },
    adult: {
      type: 'boolean',
      ui: {
        label: 'Adult',
        help: {
          show: true,
          text: '?',
          content: 'Adults can play games.'
        }
      }
    },
    age: {
      type: 'number',
      value: 10,
      ui: {
        widget: 'slider',
        label: 'What is your age?',
        descrption: 'More than 18 years old to continue filling.'
      }
    },
    gameInfo: {
      type: 'object',
      properties: {
        game: {
          type: 'string',
          ui: {
            label: 'Like games',
            description: 'Fill in and unlock'
          }
        },
        gameAge: {
          type: 'integer',
          ui: {
            label: 'Game age',
            disabled: 'dx: !{{$root.gameInfo.game}}'
          }
        }
      },
      ui: {
        label: '',
        legend: 'Game info',
        hidden: 'dx: !{{$root.age}} || {{$root.age}} < 18'
      }
    },
    evaluation: {
      type: 'number',
      ui: {
        widget: 'rate',
        label: 'Evaluate',
        description: 'Evaluate your pain, higher is more.'
      }
    },
    audio: {
      type: 'string',
      default: 'https://www.w3schools.com/html/mov_bbb.mp4',
      ui: {
        label: 'Audio',
        itemClass: 'hidden-input',
        preview: {
          type: 'audio'
        }
      }
    },
    video: {
      type: 'string',
      default: 'https://www.w3schools.com/html/mov_bbb.mp4',
      ui: {
        label: 'Video',
        itemClass: 'hidden-input',
        preview: {
          type: 'video'
        }
      }
    }
  }
}

export default {
  components: { AmberForm },
  name: 'PageForm',
  data () {
    const aForm = aFormSchema
    /* const fields = Object.keys(aForm.properties)
    for (let i = 0; i < fields.length; i++) {
      const field = aForm.properties[fields[i]]
      if (field.ui && !field.ui.hidden) {
        field.ui.hidden = 'dx: {{$root._page}} !== ' + (i + 1)
      }
      aForm.properties[fields[i]] = field
    }
    aForm.properties._page = {
      type: 'number',
      value: 1,
      ui: {
        hidden: true
      }
    } */
    return {
      aForm: aForm
    }
  }
}
</script>
