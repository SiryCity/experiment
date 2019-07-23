<template lang="pug">
  div.consent
    h1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    p test
    next-button(to='/operation' text='同意して実験方法を見る')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  }
}
</script>

<style lang="stylus" scoped>
.consent
  width 95%
  margin 60px 2.5%
</style>
