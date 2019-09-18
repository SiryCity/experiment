<!--
  index       最初に来るところ、「実験を始める」程度のことだけ書く
  consent     実験の同意をとる
  operation   実験の操作方法を教える
  measurement 実験開始 この画面でデータの計測を行う
  finished    終わったことを伝える 計測データの送信ボタンを置く
  thanks      お礼を言う もう一度計測するボタンを置く
-->
<template lang="pug">
  div.next-button

    //- 通常時のボタン
    nuxt-link.next-button__button(
      v-if='to !== "/operation" || $store.state.experiment.dominance'
      :to='to'
      @click.native='clickNative(to)'
    ) {{text}}
    
    //- 利き手が選択されていない時のボタン
    div.next-button__button.next-button__button--disable(
      v-else
    ) {{text}}
</template>
 
<script>
export default {
  props: ['to', 'text'],
  methods: {
    clickNative(to){
      if(to === '/consent') return
      if(to === '/operation') return
      // 実験開始時に●の初期値をランダムに定義
      if(to === '/measurement')  this.$store.dispatch('experiment/init')
      if(to === '/finished') return
      // 「送る」ボタンで実験結果をcloud firestoreに保存
      if(to === '/thanks') this.$store.dispatch("firebase/insert")
      if(to === '/') return
    }
  }
}
</script>


<style lang="stylus" scoped>
.next-button
  width 100%
  height 80px
.next-button__button
  width 90%
  height 60px
  line-height 60px
  margin 0 auto
  background #2073f7
  display block
  text-decoration none 
  color white
  text-align center
  border-radius 30px
.next-button__button--disable
  opacity .4
</style>
