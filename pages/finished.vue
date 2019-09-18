<!--
  index       最初に来るところ、「実験を始める」程度のことだけ書く
  consent     実験の同意をとる
  operation   実験の操作方法を教える
  measurement 実験開始 この画面でデータの計測を行う
● finished    終わったことを伝える 計測データの送信ボタンを置く
  thanks      お礼を言う もう一度計測するボタンを置く
-->
<template lang="pug">
  div.finished
    h1 お疲れ様です。
    p 以下のボタンを押すと実験内容が送信されます。
    p ※急用ができた、実験内容に不満がある等ございましたら、ここでブラウザを閉じれば実験内容は保存されません。
    next-button(to='/thanks' text='実験結果を送信' post='finish')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('redirect/redirection', 'finished')
  },
}
</script>

<style lang="stylus" scoped>
.finished
  width 90%
  margin 60px 5%
</style>
