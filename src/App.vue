<template>
  <!-- <BackgroundBlobs /> -->
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs'

export default {
  name: 'App',
  components: {
    Navbar,
    BackgroundBlobs,
    Footer
  }
}
</script>

<style lang="scss">
:root {
  --color-green: #1DB954;
  --color-black: #191414;
  --color-black-mono: #352B2B;
  --color-white: #fff;
  --color-grey: #2c394b25;
  //Remove teal?
  --color-teal: #40798c;
  --font-sm: 12px;
  --font-md: 14px;
  --font-lg: 16px;
  
  --heading-1: 32px;

}

html {
  background-color: var(--color-white);
  color: var(--color-black);
  scroll-behavior: smooth;
}

body { 
  min-height: 100vh;
}

#app {
  height: 100%;
  position: relative;
}

html,
body,
h1,
h2,
p {
  padding: 0;
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

button {
  padding: 0;
  margin: 0;
  background: none;
  outline: none;
  box-shadow: none;
  border: none;
}

</style>
