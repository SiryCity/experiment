<!--
計算結果を取得
-->
<template lang="pug">
  div
    canvas#scatter--time
    canvas#myChart.chart
    canvas#Scatter.chart
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
  height auto
  margin 30px 0
</style>