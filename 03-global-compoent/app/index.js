import Vue from 'vue/dist/vue'
import Example from './components/Example.vue'
import Item from './components/Item.vue'

Vue.component('Example', Example)
Vue.component('Item', Item)

window.Vue = Vue
