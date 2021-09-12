<template>

  <button v-if="!link" class="button" :class="btnClass">
    <slot></slot>
    <i class="fas fa-arrow-right"></i>
  </button>
  <router-link v-if="link" :to="link" class="button" :class="btnClass"></router-link>
</template>

<script>
export default { 
  name: 'Button',
  props: {
    btnClass : {
      type: String,
      default: ''
    },
    link : {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped lang="scss">
  
  .button {
    padding: 10px 15px;
    background-color: var(--color-green);
    color: var(--color-white);
    border-radius: 25px;
    font-weight: 800;
    cursor: pointer;
    &:hover {
      i { 
        transform: translateX(4px);
      }
    }
  }

  i {
    display: inline-block;
    margin-left: 10px;
    transition: transform 0.2s;
  }
</style>