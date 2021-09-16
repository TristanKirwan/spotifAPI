<template>
  <Container propClass="outerContainer">
    <template v-for="testimonial in testimonialArray" :key="testimonial.id">
      <TestimonialCard :data="testimonial" />
    </template>
  </Container>
</template>

<script>
import TestimonialData from './testimonials.json';
import TestimonialCard from '../components/TestimonialCard';
import Container from '../components/Container'

export default {
name: 'HomeTestimonials',
components: {
  TestimonialCard,
  Container
},
data() {
  return {
    testimonialArray: TestimonialData.testimonials
  }
}
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';
.outerContainer{
  display: grid;
  grid-gap: 15px;
  @include m {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>