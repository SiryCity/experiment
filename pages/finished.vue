<template lang="pug">
  div finished
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('progress/checkAndRedirectOrNot', 'finished')
  },
}
</script>

<style lang="stylus" scoped>
.finished
  width 95%
  margin 60px 2.5%
</style>
