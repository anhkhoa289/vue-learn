<template>
  <fragment>
    <div class="example">{{ msg }}</div>
    <slot></slot>
  </fragment>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
