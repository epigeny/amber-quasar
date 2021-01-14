<template>
  <q-page class='q-pa-lg'>
  <div class="q-pa-md q-gutter-md">
    <dashboard/>
  </div>
  </q-page>
</template>

<script>
import Dashboard from 'src/components/Dashboard.vue'

export default {
  components: { Dashboard },
  name: 'PageIndex',
  data () {
    return {}
  }
}
</script>
