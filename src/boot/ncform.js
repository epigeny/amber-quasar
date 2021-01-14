import Vue from 'vue'
import vueNcform from '@ncform/ncform'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ncformStdComps from '@ncform/ncform-theme-elementui'
import axios from 'axios'

Vue.use(Element)
Vue.use(vueNcform, { extComponents: ncformStdComps })
window.$http = Vue.prototype.$http = axios
