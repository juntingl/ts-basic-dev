<template>
  <div>
    <h1>Hello {{ name }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data() {
      return {
        name: 'TypeScript'
      }
    }
  }
</script>

<style lang="css" scoped>
h1 {
  color:aquamarine;
}
</style>