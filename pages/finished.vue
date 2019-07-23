<template lang="pug">
  div
</template>

<script>
import NextButton from '~/components/NextButton'
export default {
  components: {
    NextButton
  },
  created(){
    this.$store.commit('others/finishExperiment')
  }
}
</script>

<style lang="stylus" scoped>
.finished
  width 95%
  margin 60px 2.5%
</style>
