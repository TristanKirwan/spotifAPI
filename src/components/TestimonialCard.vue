<template>
  <div class="card">
    <div class="header">
      <img :src="avatarImg" class="avatar mobileAvatar"/>
      <img :src="avatarImg" class="avatar desktopAvatar"/>
      <span class="divider"></span >
    </div>
    <div class="body">
      <blockquote class="testimonialText">
        {{data.text}}
      </blockquote>
      <p class="name">- {{fullName}}</p>
      <div class="starsContainer mobile">
        <template v-for="n in 5" :key="n">
          <i class="fas fa-star filled-star" v-if="n <= data.stars"></i>
          <i class="far fa-star empty-star" v-else></i>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'TestimonialCard',
props: ['data'],
data () {
  return {
    avatarImg: '',
    fullName: this.data.name,
  }
},
created(){
  this.avatarImg = require(`../assets/${this.data.src}`)
}
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';
.card{ 
  display: grid;
  border: 1px solid var(--color-grey);
  box-shadow: 5px 5px 15px var(--color-grey);
  padding: 15px 10px;
  border-radius: 5px;
  grid-gap: 20px;
  background-color: var(--color-white);
  grid-template-rows: max-content 1fr;
}

.header { 
  display: grid;
  justify-items: center;
  grid-gap: 20px;
}

.body { 
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-gap: 15px;
  @include m {
    grid-template-rows: auto repeat(2, max-content);
  }
}

.divider {
  width: 90%;
  height: 1px;
  background: var(--color-teal);
  opacity: 0.2;
}

.avatar {
  height: 150px;
  object-fit: cover;
}

.desktopAvatar {
  display: none;
  @include m {
    display: block;
  }
}

.mobileAvatar {
  display: block;
  @include m {
    display: none;
  }
}

.testimonialText {
  position: relative;
  margin: 0;
  &:before, &:after {
    font-style: italic;
    font-size: 22px;
    margin-right: 5px;
    line-height: 16px;
  }
  &:before {
    content: '“';
  }
  &:after{ 
    content: '”';
  }
}

.name {
  font-weight: 500;
}

.filled-star {
  color: var(--color-green);
}

.empty-star{
  color: var(--color-green);
}
</style>