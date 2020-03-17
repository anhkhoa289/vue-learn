import Vue from 'vue/dist/vue'
import Example from './components/Example.vue'
import Item from './components/Item.vue'

window.showApp = () => {
  return new Vue({
    el: '#app',
    components: {
      Example,
      Item
    },
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })
}

