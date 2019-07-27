<template lang="pug">
  div.next-button
      nuxt-link.next-button__button(v-if='!post' :to='to') {{text}}
      nuxt-link.next-button__button(v-else :to='to' @click.native='$store.dispatch("firebase/insert")') {{text}}
</template>

<script>
export default {
  props: ['to', 'text', 'post']
}
</script>


<style lang="stylus" scoped>
.next-button
  width 100%
  height 80px
.next-button__button
  width 95%
  height 60px
  line-height 60px
  margin 0 auto
  background #2073f7
  display block
  text-decoration none 
  color white
  text-align center
  border-radius 30px
</style>
