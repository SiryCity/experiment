<template lang="pug">
  div.operation
    h1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    p test
    next-button(to='/measurement' text='実験をはじめる' post='begin')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('progress/checkAndRedirectOrNot', 'operation')
  },
}
</script>

<style lang="stylus" scoped>
.operation
  width 95%
  margin 60px 2.5%
</style>
