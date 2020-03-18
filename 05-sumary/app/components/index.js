import Layout from './Layout.vue'
import Parent from './Parent.vue'

const Plugin = {
  install: function(Vue, options) {
    Vue.component('Layout', Layout)
    Vue.component('Parent', Parent)
  }
}

export default Plugin
