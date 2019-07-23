<template lang="pug">
div.submit-component(:class='{"submit-component--visible": $store.state.others.isFinished}')
  no-ssr
    form(name='contact', method='POST' action='thanks')
      input(type='hidden', name='form-name', value='contact')
      textarea#result(name='result', v-model='$store.getters["others/json"]')
      button(type='submit') 送信
</template>

<style lang="stylus" scoped>
.submit-component
  width 100%
  height 100%
  position absolute
  left 0
  top 0
  background orange
  display none

.submit-component--visible
  display block

</style>
