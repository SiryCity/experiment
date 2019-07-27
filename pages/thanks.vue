<template lang="pug">
  div.index
    h1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    p test
    next-button(to='/' text='もう一度チャレンジ')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('progress/checkAndRedirectOrNot', 'thanks')
  },
}
</script>

<style lang="stylus" scoped>
.index
  width 95%
  margin 60px 2.5%
</style>
