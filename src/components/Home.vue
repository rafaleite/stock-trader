<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load your data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr>
    <p>Your founds: {{founds | currency}} </p>
  </div>

</template>

<script>
    export default {
      computed: {
        founds() {
          return this.$store.getters.founds
        }
      }
    }
</script>

<style scoped>

</style>
