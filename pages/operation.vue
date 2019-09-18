<!--
  index       最初に来るところ、「実験を始める」程度のことだけ書く
  consent     実験の同意をとる
● operation   実験の操作方法を教える
  measurement 実験開始 この画面でデータの計測を行う
  finished    終わったことを伝える 計測データの送信ボタンを置く
  thanks      お礼を言う もう一度計測するボタンを置く
-->
<template lang="pug">
  div.operation
    h1 何をすればよいですか？
    p 先ほどご説明した通り、下のような円をひたすら指でタッチしてください。全部で100回です。
    p 画面の回転、リサイズはご遠慮ください。指の動く条件が変わるのを防ぐためです。
    p 実験中に他の用事ができた場合はスマホを突然切って問題ありません。歩きスマホ等はなさらないよう、お願いいたします。
    next-button(to='/measurement' text='実験をはじめる' post='begin')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('redirect/redirection', 'operation')
  },
}
</script>

<style lang="stylus" scoped>
.operation
  width 90%
  margin 60px 5%
</style>
