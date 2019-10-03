<!--
計算結果を取得
-->
<template lang="pug">
  div
    canvas#myChart.chart
    canvas#Scatter.chart
    canvas#scatter--time
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('firebase/select')
  }
}
</script>

<style lang="stylus" scoped>
.chart
  width 100vw
  height 100vh
  margin 30px 0
</style>