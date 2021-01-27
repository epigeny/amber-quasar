export function loadForms (context) {
  context.commit('updateLoading', true)
  // here will use axios to query the user's forms
  const formGroups =
  [
    {
      title: 'Case reports',
      forms: [
        {
          id: 't1',
          title: 'Adult trauma registry',
          description: 'Form from the Centre for Global Surgery',
          date: '',
          link: 'form',
          icon: 'face',
          color: 'primary',
          form: {
            type: 'object',
            properties: {
              _line1: {
                type: 'HTML',
                value: '<h6 class="q-ma-none">Hospital transfer</h6>'
              },
              hospital: {
                type: 'object',
                ui: {
                  label: 'Hospital transfert',
                  showLegend: false,
                  noLabelSpace: true
                },
                properties: {
                  transfer: {
                    type: 'boolean',
                    ui: {
                      label: 'Was the patient transferred from another hospital?',
                      widgetConfig: {
                        type: 'button'
                      }
                    }
                  },
                  name: {
                    type: 'string',
                    ui: {
                      label: 'Name of the hospital',
                      hidden: 'dx: !{{$root.hospital.transfer}}'
                    },
                    rules: {
                      required: true
                    }
                  }
                }
              },
              _line2: {
                type: 'HTML',
                value: '<h6 class="q-ma-none">Patient information</h6>'
              },
              patient: {
                type: 'object',
                ui: {
                  label: 'Patient information',
                  showLegend: false,
                  noLabelSpace: true
                },
                properties: {
                  id: {
                    type: 'string',
                    ui: {
                      label: 'Patient\'s identification number'
                    },
                    rules: {
                      required: true,
                      minLength: {
                        value: 10,
                        errMsg: 'Please fill in 10 chars'
                      },
                      maxLength: {
                        value: 10,
                        errMsg: 'Please fill in 10 chars'
                      }
                    }
                  },
                  age: {
                    type: 'integer',
                    default: 18,
                    ui: {
                      label: 'Age',
                      widget: 'input-number'
                    },
                    rules: {
                      required: true
                    }
                  },
                  choice: {
                    type: 'string',
                    ui: {
                      label: 'Gender',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        enumSource: [
                          {
                            value: 'M',
                            label: 'Male'
                          },
                          {
                            value: 'F',
                            label: 'Female'
                          },
                          {
                            value: 'O',
                            label: 'Other'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  education: {
                    type: 'integer',
                    ui: {
                      label: 'Education level',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Child'
                          },
                          {
                            value: 2,
                            label: 'Primary'
                          },
                          {
                            value: 3,
                            label: 'Secondary'
                          },
                          {
                            value: 4,
                            label: 'College/University'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  occupation: {
                    type: 'integer',
                    ui: {
                      label: 'Patient\'s occupation',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Child or student'
                          },
                          {
                            value: 2,
                            label: 'Employed: manual labourer'
                          },
                          {
                            value: 3,
                            label: 'Employed: office work'
                          },
                          {
                            value: 4,
                            label: 'Employed: farmer'
                          },
                          {
                            value: 5,
                            label: 'Employed: mining'
                          },
                          {
                            value: 6,
                            label: 'Employed: other'
                          },
                          {
                            value: 7,
                            label: 'Unemployed'
                          },
                          {
                            value: 8,
                            label: 'Retired'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  otherOccupation: {
                    type: 'string',
                    ui: {
                      label: 'Other occupation',
                      hidden: 'dx: {{$root.patient.occupation}} !== 6'
                    },
                    rules: {
                      required: true
                    }
                  },
                  arrival: {
                    type: 'integer',
                    ui: {
                      label: 'Mode of arrival',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'By foot'
                          },
                          {
                            value: 2,
                            label: 'Ambulance'
                          },
                          {
                            value: 3,
                            label: 'Police'
                          },
                          {
                            value: 4,
                            label: 'Private vehicle'
                          },
                          {
                            value: 5,
                            label: 'Public transport'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  }
                }
              },
              _line3: {
                type: 'HTML',
                value: '<h6 class="q-ma-none">Mechanism</h6>'
              },
              mechanism: {
                type: 'object',
                ui: {
                  label: 'Mechanism',
                  showLegend: false,
                  noLabelSpace: true
                },
                properties: {
                  cause: {
                    type: 'integer',
                    ui: {
                      label: 'Cause of injury',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Road traffic incident'
                          },
                          {
                            value: 2,
                            label: 'Fall'
                          },
                          {
                            value: 3,
                            label: 'Blunt assault'
                          },
                          {
                            value: 4,
                            label: 'Stab/laceration/impalement'
                          },
                          {
                            value: 5,
                            label: 'Gunshot'
                          },
                          {
                            value: 6,
                            label: 'Blast/Landmine'
                          },
                          {
                            value: 7,
                            label: 'Burn'
                          },
                          {
                            value: 8,
                            label: 'Drowning'
                          },
                          {
                            value: 9,
                            label: 'Bite'
                          },
                          {
                            value: 10,
                            label: 'Crush'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  biteCause: {
                    type: 'array',
                    ui: {
                      label: 'Bite cause',
                      widget: 'checkbox',
                      widgetConfig: {
                        arrangement: 'v',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Human'
                          },
                          {
                            value: 2,
                            label: 'Animal'
                          }
                        ]
                      },
                      hidden: 'dx: {{$root.mechanism.cause}} !== 9'
                    },
                    rules: {
                      required: true
                    }
                  },
                  settings: {
                    type: 'integer',
                    ui: {
                      label: 'Settings',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Transportation accident'
                          },
                          {
                            value: 2,
                            label: 'Work'
                          },
                          {
                            value: 3,
                            label: 'Home'
                          },
                          {
                            value: 4,
                            label: 'School'
                          },
                          {
                            value: 5,
                            label: 'Leisure/Sport'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  intent: {
                    type: 'Intent',
                    ui: {
                      label: 'Settings',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Unintentional'
                          },
                          {
                            value: 2,
                            label: 'Intentional'
                          },
                          {
                            value: 3,
                            label: 'Self-inflicted'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  alcohol: {
                    type: 'integer',
                    ui: {
                      label: 'Alcohol',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'No'
                          },
                          {
                            value: 2,
                            label: 'Suspected/Confirmed'
                          },
                          {
                            value: 3,
                            label: 'Unknown'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  }
                }
              },
              _line4: {
                type: 'HTML',
                value: '<h6 class="q-ma-none">Road traffic incident</h6>'
              },
              road: {
                type: 'object',
                ui: {
                  label: 'Road traffic incident',
                  showLegend: false,
                  noLabelSpace: true
                },
                properties: {
                  vehicle: {
                    type: 'integer',
                    ui: {
                      label: 'Type of vehicle',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Car'
                          },
                          {
                            value: 2,
                            label: 'Motorbike'
                          },
                          {
                            value: 3,
                            label: 'Bus'
                          },
                          {
                            value: 4,
                            label: 'Truck'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  sector: {
                    type: 'integer',
                    ui: {
                      label: 'Sector',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Private vehicle'
                          },
                          {
                            value: 2,
                            label: 'Public transit'
                          },
                          {
                            value: 3,
                            label: 'Commercial vehicle'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  role: {
                    type: 'integer',
                    ui: {
                      label: 'Role on the road',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Driver'
                          },
                          {
                            value: 2,
                            label: 'Passenger'
                          },
                          {
                            value: 3,
                            label: 'Pedestrian'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  helmet: {
                    type: 'integer',
                    ui: {
                      label: 'Helmet use',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Yes'
                          },
                          {
                            value: 2,
                            label: 'No'
                          },
                          {
                            value: 3,
                            label: 'Unknown'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  seatbelt: {
                    type: 'integer',
                    ui: {
                      label: 'Seatbelt use',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Yes'
                          },
                          {
                            value: 2,
                            label: 'No'
                          },
                          {
                            value: 3,
                            label: 'Unknown'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  }
                }
              },
              _line5: {
                type: 'HTML',
                value: '<h6 class="q-ma-none">Vital signs</h6>'
              },
              vitalSigns: {
                type: 'object',
                ui: {
                  label: 'Vital signs',
                  showLegend: false,
                  noLabelSpace: true
                },
                properties: {
                  neurologicalStatus: {
                    type: 'integer',
                    ui: {
                      label: 'Neurological status',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'Alert'
                          },
                          {
                            value: 2,
                            label: 'Responds to verbal stimuli'
                          },
                          {
                            value: 3,
                            label: 'Responds to painful stimuli'
                          },
                          {
                            value: 4,
                            label: 'Unresponsive'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  seriousInjury: {
                    type: 'integer',
                    ui: {
                      label: 'Serious injury',
                      widget: 'radio',
                      widgetConfig: {
                        arrangement: 'v',
                        itemDataKey: 'selectedItem',
                        enumSource: [
                          {
                            value: 1,
                            label: 'None'
                          },
                          {
                            value: 2,
                            label: 'One serious injury'
                          },
                          {
                            value: 3,
                            label: 'More than one serious injury'
                          }
                        ]
                      }
                    },
                    rules: {
                      required: true
                    }
                  },
                  injuries: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          ui: {
                            label: 'Type',
                            widget: 'select',
                            widgetConfig: {
                              placeholder: 'Select an injury',
                              enumSource: [
                                {
                                  value: 1,
                                  label: 'Facial fracture'
                                },
                                {
                                  value: 2,
                                  label: 'Fracture spine no paralysis'
                                },
                                {
                                  value: 3,
                                  label: 'Fracture spine with paralysis'
                                },
                                {
                                  value: 4,
                                  label: 'Fracture upper extremity'
                                },
                                {
                                  value: 5,
                                  label: 'Pelvic fracture'
                                },
                                {
                                  value: 6,
                                  label: 'Fracture lower extremity'
                                },
                                {
                                  value: 7,
                                  label: 'Skull fracture'
                                },
                                {
                                  value: 8,
                                  label: 'Traumatic brain injury'
                                },
                                {
                                  value: 9,
                                  label: 'Neck injury'
                                },
                                {
                                  value: 10,
                                  label: 'Thoracic injury'
                                },
                                {
                                  value: 11,
                                  label: 'Abdominal injury'
                                },
                                {
                                  value: 12,
                                  label: 'Cut/Open wound'
                                },
                                {
                                  value: 13,
                                  label: 'Sprain/Strain'
                                },
                                {
                                  value: 14,
                                  label: 'Dislocation upper extremity'
                                },
                                {
                                  value: 15,
                                  label: 'Dislocation lower extremity'
                                },
                                {
                                  value: 16,
                                  label: 'Burn'
                                },
                                {
                                  value: 17,
                                  label: 'Soft tissue extremity without fracture'
                                }
                              ]
                            }
                          },
                          rules: {
                            required: true
                          }
                        },
                        open: {
                          type: 'boolean',
                          ui: {
                            label: 'Open',
                            help: {
                              show: true,
                              text: '?',
                              content: 'Open or closed injury'
                            }
                          },
                          rules: {
                            required: true
                          }
                        }
                      }
                    },
                    ui: {
                      label: 'Injuries',
                      showLegend: false,
                      noLabelSpace: false,
                      widget: 'array-table',
                      widgetConfig: {
                        disableCollapse: true,
                        showOneIfEmpty: false
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
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
  }, 200)
}

export function storeFormValue (context, value) {
  context.commit('updateFormValue', value)
}
