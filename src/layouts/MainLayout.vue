<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Amber
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <q-item to="/profile" exact>
          <q-item-section avatar>
            <q-icon name="face" />
          </q-item-section>
          <q-item-section>
            Profile
          </q-item-section>
        </q-item>
        <q-item to="/login" exact>
          <q-item-section avatar>
            <q-icon name="exit_to_app" />
          </q-item-section>
          <q-item-section>
            Disconnect
          </q-item-section>
        </q-item>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
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

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
