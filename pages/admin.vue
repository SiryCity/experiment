<!--
計算結果を取得
-->
<template lang="pug">
  div(v-if='$store.state.firebase.results === null') データ取得中...
  div(v-else)
    div {{$store.state.firebase.results.length}} 
</template>


<script>
export default {
  mounted(){
    this.$store.dispatch('firebase/select')
  }
}
</script>
