<template>
  <header class="navbar-content navbar">
    <h2>Where in the world?</h2>
    <h2 v-on:click="$emit('clicked')">
      <span key="mode" v-if="mode === 'dark'"><i class="fa fa-moon-o" aria-hidden="true"></i></span>
      <span key="mode" v-else><i class="fa fa-sun-o" aria-hidden="true"></i></span>  {{ mode }} mode</h2>
  </header>
</template>

<script>
export default {
  props: ['mode']
};
</script>

<style scoped>

</style>