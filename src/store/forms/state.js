export default function () {
  return {
    loading: true,
    formGroups: [],
    formValue: {},
    links: [
      {
        title: 'Web',
        caption: 'OBiBa web site',
        icon: 'favorite',
        link: 'https://www.obiba.org'
      },
      {
        title: 'Docs',
        caption: 'Amber documentation',
        icon: 'school',
        link: 'https://amberdoc.obiba.org'
      },
      {
        title: 'Github',
        caption: 'github.com/obiba',
        icon: 'code',
        link: 'https://github.com/obiba'
      },
      {
        title: 'Forum',
        caption: 'OBiBa users group',
        icon: 'record_voice_over',
        link: 'https://groups.google.com/d/forum/obiba-users'
      }
    ]
  }
}
