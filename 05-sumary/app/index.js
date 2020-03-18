import Vue from 'vue/dist/vue'
import Components from './components'
import { Plugin } from 'vue-fragment'


Vue.use(Components)
Vue.use(Plugin)

new Vue({
  el: '#app',
  data: {
    address: '91 Võ Như Hưng',
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
  },
})

