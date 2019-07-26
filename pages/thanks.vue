<template lang="pug">
  div thanks
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('progress/checkAndRedirectOrNot', 'thanks')
  },
}
</script>
