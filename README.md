# vue-particles.js
### Vue.js component for [particles.js](https://vincentgarreau.com/particles.js/)

### Nuxt.js compatible (client only)

## Add to your project
```bash
yarn add @starzio/vue-particles.js --save --dev
```
Or
```bash
npm install @starzio/vue-particles.js --save-dev
```

## Configure with vue
```javascript
import Vue from 'vue'
import VueParticlesJS from 'vue-particles.js'

Vue.use(VueParticlesJS)
```

## Include in your page
```vue
<template>
  <div id="app">
    <vue-particles></vue-particles>
  </div>
</template>
```


## Customization
you can modify the particlesData prop to use your own particles.js config object.
```vue
<template>
  <div id="app">
    <vue-particles :particlesData="particlesData"></vue-particles>
  </div>
</template>

<script>
import particlesJSConfig from './particlesjs-config.json'

export default {
  data: function () {
    return {
      particlesData: particlesJSConfig
    }
  }
}
</script>
```
You can generate your particlesjs-config.json file from [particles.js](https://vincentgarreau.com/particles.js/) website.

#### That's it! If you have any questions or issues, feel free to open a pull request.
