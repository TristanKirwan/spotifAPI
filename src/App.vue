<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
:root {
  --color-green: #1DB954;
  --color-black: #191414;
  --color-white: #fff;
  --color-grey: #2c394b25;

  --font-sm: 12px;
  --font-md: 14px;
  --font-lg: 16px;

}

html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    background-color: var(--color-white);
    color: var(--color-black)
}


</style>
