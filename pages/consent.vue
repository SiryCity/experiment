<!--
  index       最初に来るところ、「実験を始める」程度のことだけ書く
● consent     実験の同意をとる
  operation   実験の操作方法を教える
  measurement 実験開始 この画面でデータの計測を行う
  finished    終わったことを伝える 計測データの送信ボタンを置く
  thanks      お礼を言う もう一度計測するボタンを置く
-->
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
  },
  mounted(){
    this.$store.dispatch('progress/checkAndRedirectOrNot', 'consent')
  },
}
</script>

<style lang="stylus" scoped>
.consent
  width 95%
  margin 60px 2.5%
</style>
