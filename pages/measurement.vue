<!--
  index       最初に来るところ、「実験を始める」程度のことだけ書く
  consent     実験の同意をとる
  operation   実験の操作方法を教える
● measurement 実験開始 この画面でデータの計測を行う
  finished    終わったことを伝える 計測データの送信ボタンを置く
  thanks      お礼を言う もう一度計測するボタンを置く
-->
<template lang="pug">
  div.measurement
    div.measurement__hitarea(
      @click='readyToTap'
      :style='$store.getters["others/transform"]'
    )
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  methods: {
    readyToTap(e){
      this.$store.commit("experiment/tapped", e)
    }
  },
  mounted(){
    this.$store.dispatch('progress/checkAndRedirectOrNot', 'measurement')
  },

}
</script>

<style lang="stylus" scoped>
.measurement
  width 100%
  height 100%
  overflow hidden

.measurement__hitarea
  width 5vmin
  height 5vmin
  background #f54242
  border-radius 50%
  transition-duration .1s
  transition-property transform
</style>
