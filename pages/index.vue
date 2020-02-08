<!--
● index       最初に来るところ、「実験を始める」程度のことだけ書く
  consent     実験の同意をとる
  operation   実験の操作方法を教える
  measurement 実験開始 この画面でデータの計測を行う
  finished    終わったことを伝える 計測データの送信ボタンを置く
  thanks      お礼を言う もう一度計測するボタンを置く
-->
<template lang="pug">
  div.index
    h1 評価実験【WebのUIにおける誘目性の評価】
    p 興味を持っていただきありがとうございます。
    p 概要をお読みの上、よろしければ実験にご協力をお願いいたします。
    next-button(to='/consent' text='実験の概要を読む')
    p(@click='$store.dispatch("test/authAction")') {{$store.getters['test/authGetter']}}
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('redirect/redirection', 'index')
  },
}
</script>

<style lang="stylus" scoped>
.index
  width 90%
  margin 60px 5%
</style>
