export function loadForms (context) {
  context.commit('updateLoading', true)
  // here will use axios to query the user's forms
  const formGroups =
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
          color: 'primary',
          form: {
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
                default: 0,
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
                default: 0,
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
  setTimeout(() => {
    context.commit('updateFormGroups', formGroups)
    context.commit('updateLoading', false)
  }, 2000)
}

export function storeFormValue (context, value) {
  context.commit('updateFormValue', value)
}
