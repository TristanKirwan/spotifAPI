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
  async created() {
    if(this.$route.query.code && !this.$store.state.hasAccessToken){
      const returnedCode = this.$route.query.code
      const result = await fetch(`${process.env.VUE_APP_baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          code: returnedCode
        })
      })

      const data = await result.json().then(res => {
        this.$store.commit('setExpiresIn', res.expiresIn)
        this.$store.commit('setHasAccesToken', res.hasAccessToken)
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/imports.scss';
  .home { 
    display: grid;
    grid-gap: 15px;
    @include m {
      margin-top: 25px;
    }
  }

</style>