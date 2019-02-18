<template>
  <div id="app">
    <vue-particles></vue-particles>
    <vue-logo></vue-logo>
  </div>
</template>

<script>
import VueLogo from './components/VueLogo'

export default {
  name: 'app',
  components: {
      VueLogo
  }
}
</script>

<style>
body {
    background: #1B1A27;
}
.particles-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
}
</style>
