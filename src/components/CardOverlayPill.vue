<template>
  <span class="overlayPill"><slot></slot></span>
</template>

<script>
export default {
name: 'CardOverlayPill'
}
</script>

<style scoped lang='scss'>
.overlayPill{
  border-radius: 0px 24px 24px 0px;
  background-color: var(--color-green);
  padding: 5px 10px;
  color: var(--color-white);
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
}
</style>