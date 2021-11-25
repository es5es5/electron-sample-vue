<template>
  <div id="wrapper">
    <button type="button" @click="sample">Sample</button>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    methods: {
      sample () {
        this.$router.push({
          name: 'Sample'
        })
      }
    }
  }
</script>

<style>
</style>
