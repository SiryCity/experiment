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
    h1 どんな実験ですか？
    p 「スマホを操作する時の指の動きを観測する実験」です。
    p 下のような円が画面に表示されるので、ひたすら指でタッチしてください。
    p タッチの速度、正確性、角度、色との関係、時間帯などを計測します。
    p 実験結果は学会・研究会等で発表させていただく場合があります。発表の際も、実験結果以外のあなたの情報は一切公表しません。
    p ただし、スマホを触る手がどちらかだけは教えてください。これは、右手と左手で指の動きが大きく異なるためです。あなたがスマホを触る手は...
    input#left(type='radio' name='dominance' value='left' v-model='dominance' style={"display": "none"})
    label.radio(for='left' :class='{"radio--selected": $store.state.experiment.dominance === "left"}') 左手
    input#right(type='radio' name='dominance' value='right' v-model='dominance' style={"display": "none"})
    label.radio(for='right' :class='{"radio--selected": $store.state.experiment.dominance === "right"}') 右手

    next-button(to='/operation' text='同意して実験方法を見る')
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  mounted(){
    this.$store.dispatch('redirect/redirection', 'consent')
  },
  computed: {
    dominance: {
      get() {
        return this.$store.state.experiment.dominance
      },
      set(dominance) {
        this.$store.commit('experiment/setDominance', dominance)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.consent
  width 95%
  margin 60px 2.5%

.radio
  width 45%
  height 50px
  line-height 44px
  display inline-block
  color #2073f7
  font-weight bold
  border 4px solid #2073f7
  text-decoration none 
  text-align center
  border-radius 5px
  margin 50px 2.5%
  box-sizing border-box

.radio--selected
  color white
  background #2073f7
</style>
