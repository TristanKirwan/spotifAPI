<template>
  <div class="container" :class="propClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: ['propClass']

}
</script>

<style scoped lang="scss">
@import '@/styles/imports.scss';
  .container {
    padding: 0px 10px;
    max-width: 600px;
    margin: 0 auto;
    @include m {
      max-width: 1200px;
      padding: 0 20px;
    }
    @include xl {
      max-width: 1600px;
    }
  }
</style>