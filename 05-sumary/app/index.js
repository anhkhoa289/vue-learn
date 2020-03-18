import Vue from 'vue/dist/vue'
import Parent from './components/Parent.vue'
import Layout from './components/Layout.vue'
import { Plugin } from 'vue-fragment'


Vue.use(Plugin)

new Vue({
  el: '#app',
  components: {
    Layout,
    Parent,
  },
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

