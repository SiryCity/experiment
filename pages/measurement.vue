<!--
  index       最初に来るところ、「実験を始める」程度のことだけ書く
  consent     実験の同意をとる
  operation   実験の操作方法を教える
● measurement 実験開始 この画面でデータの計測を行う
  finished    終わったことを伝える 計測データの送信ボタンを置く
  thanks      お礼を言う もう一度計測するボタンを置く
-->
<template lang="pug">
  div.measurement(
    @click='touch'
  )
    div.measurement__circle(
      :style='$store.getters["others/css"]'
    )
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  methods: {
    touch(e){
      this.$store.dispatch('experiment/touched', e)
    }
  },
  mounted(){
    this.$store.dispatch('redirect/redirection', 'measurement')
  },

}
</script>

<style lang="stylus" scoped>
.measurement
  width 100%
  height 100%
  overflow hidden
  background #fff

.measurement__circle
  width 10vmin
  height 10vmin
  background #f54242
  border-radius 50%
</style>
