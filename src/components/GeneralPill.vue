<template>
  <span class="generalPill"><slot></slot></span>
</template>

<script>
export default {
name: 'GeneralPill'
}
</script>

<style scoped lang='scss'>
.generalPill{
  border-radius: 24px;
  background-color: var(--color-green);
  padding: 5px 10px;
  color: var(--color-white);
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
}
</style>