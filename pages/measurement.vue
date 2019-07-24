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
