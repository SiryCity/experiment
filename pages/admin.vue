<!--
計算結果を取得
-->
<template lang="pug">
  div
    canvas#scatter--n-time
    canvas#scatter--h-time
    canvas#scatter--l-time
    canvas#scatter--s-time
    canvas#scatter--dist-time
    canvas#scatter--dist-h
    canvas#scatter--dist-s
    canvas#scatter--dist-l
    canvas#scatter--px-time
    canvas#scatter--px-time--right
    canvas#scatter--px-time--left
    canvas#scatter--py-time
    canvas#scatter--py-time--right
    canvas#scatter--py-time--left
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