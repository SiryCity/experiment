<!--
  index       最初に来るところ、「実験を始める」程度のことだけ書く
  consent     実験の同意をとる
  operation   実験の操作方法を教える
  measurement 実験開始 この画面でデータの計測を行う
  finished    終わったことを伝える 計測データの送信ボタンを置く
● thanks      お礼を言う もう一度計測するボタンを置く
-->
<template lang="pug">
  div.index
    h1 ご協力ありがとうございました。
    p 実験に関して、不明点がありましたら以下までお願いいたします。
    p withhellopro@gmail.com
    p 実験は1人何回でも参加できます。お時間がございましたら、引き続きご協力のほどお願いいたします。
    next-button(to='/' text='もう一度チャレンジ')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('redirect/redirection', 'thanks')
  },
}
</script>

<style lang="stylus" scoped>
.index
  width 90%
  margin 60px 5%
</style>
