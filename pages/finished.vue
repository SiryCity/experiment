<template lang="pug">
  div.index
    h1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    p test
    next-button(to='/thanks' text='実験結果を送信' post='finish')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('progress/checkAndRedirectOrNot', 'finished')
  },
}
</script>

<style lang="stylus" scoped>
.finished
  width 95%
  margin 60px 2.5%
</style>
