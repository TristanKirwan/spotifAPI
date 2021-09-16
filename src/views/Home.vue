<template>
  <div class="home">
    <HomeHeroSection />
    <HomeTestimonials />
  </div>
</template>

<script>
import HomeHeroSection from '@/sections/HomeHeroSection';
import HomeTestimonials from '@/sections/HomeTestimonials';

export default {
  name: 'Home',
  components: {
    HomeHeroSection,
    HomeTestimonials
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/imports.scss';
  .home { 
    display: grid;
    grid-gap: 15px;
    //TODO: get rid of this.
    padding-bottom: 100px;
    @include m {
      margin-top: 25px;
    }
  }

</style>