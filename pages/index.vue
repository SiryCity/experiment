<template lang="pug">
  div.index
    h1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    p test
    next-button(to='/consent' text='実験の概要を読む')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('progress/checkAndRedirectOrNot', 'index')
  },
}
</script>

<style lang="stylus" scoped>
.index
  width 95%
  margin 60px 2.5%
</style>
