<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @clicked="clicked"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  data() {
    return {
      mode: 'dark',
    }
  },
  metaInfo: {
    titleTemplate: '%s - REST Countries App'
  },
  components: {
    Header,
  },
  methods: {
    clicked: function () {
      if (this.mode === 'dark') {
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
