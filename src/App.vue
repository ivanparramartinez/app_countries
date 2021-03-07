<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @clicked="clicked"/>
    <Home :mode="mode"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/components/Home";

export default {
  name: 'App',
  data(){
    return {
      mode: 'dark',
    }
  },
  components: {
    Home,
    Header,
  },
  methods: {
    clicked: function(){
      if(this.mode === 'dark'){
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('./css/style.css');
</style>
