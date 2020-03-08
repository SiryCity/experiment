<template lang="pug">
  div#root
    nuxt
</template>

<script>
export default {
  mounted(){
    if(process.client){
      this.$store.commit('others/setStatic100vh')
    }
  },
  head() {
    return {
      meta: [
        { name: "robots", content: process.env.META },
      ],
    }
  }
}
</script>

<style lang="stylus">
html
  font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  color #333
  background-color #eee

*
*before
*after
  box-sizing border-box
  margin 0
h1
p
  word-wrap break-word
:root
  --static100vh 100vh
body
  margin 0
#root
  width 100vw
  height var(--static100vh)
  position relative
  overflow-x hidden

</style>

