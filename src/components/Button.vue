<template>

  <button v-if="!link" class="button" :class="btnClass">
    <slot></slot>
    <i class="fas fa-arrow-right"></i>
  </button>
  <router-link v-if="!isExternalLink" :to="link" class="button bbb" :class="btnClass"></router-link>
  <a class="button aaa" v-if="isExternalLink" :class="btnClass" :href="link">
    <slot></slot>
    <i class="fas fa-arrow-right"></i>
  </a>
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
  },
  data() {
    return {
      isExternalLink: false
    }
  },
  created(){
    if(this.link && this.link.includes("http")){
      this.isExternalLink = true
    } else {
      this.isExternalLink = false 
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