<template>
  <div class="particles-container" :id="id" :particlesData="particlesData"></div>
</template>

<script>
import DefaultData from './default-data.json'

export default {
  name: 'vue-particles',
  data: function () {
    return {
      id: 'particles-instance-' + Math.floor(Math.random() * 5000),
    }
  },
  props: {
    particlesData: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.particlesJsObject = require('particles.js')

    this.$nextTick(() => {
      this.initParticleJS(this.particlesData)
    })
  },
  methods: {
    initParticleJS (particlesData) {
        let loadedData = particlesData

        if (loadedData === null ) {
            loadedData = DefaultData
        }

        // eslint-disable-next-line
        particlesJS(this.id, loadedData);
      }
    }
  }
</script>
