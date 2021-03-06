<template>
  <router-link class="artistCard" :to="artistLink">
    <img :alt="artistAltText" :src="imgSrc" class="artistPhoto"/>
    <div class="cardBody">
      <span class="artistName">{{artistName}}</span>
      <div v-if="shouldShowGenresContainer" class="genreContainer">
        <GeneralPill v-for="genre in artistGenres" :key="genre" class="genreLabel">{{genre}}</GeneralPill>
      </div>
    </div>
  </router-link>
</template>

<script>
import avatarPlaceholder from '@/assets/user-placeholder.png';
import GeneralPill from '@/components/GeneralPill';

export default {
  name: 'ArtistCard',
  components: {
    GeneralPill
  },
  props: ['data'],
  data() {
    return {
      artistName: '',
      imgSrc: avatarPlaceholder
    }
  },
  computed: {
    artistAltText() {
      return `Artist image of the artist ${this.artistName}`
    },
    artistGenres() {
      return this.data.genres.slice(0,3)
    },
    shouldShowGenresContainer(){
      if(this.artistGenres.length > 0) return true
      return false
    },
    artistLink() {
      return {
        name: 'Artist',
        params: {
          id: this.data.id
        }
      }
    }
  },
  created(){
    this.artistName = this.data.name;
    if(this.data.images[1]) this.imgSrc = this.data.images[1].url
  }
}
</script>

<style scoped lang='scss'>
.artistCard{
  padding: 20px;
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-gap: 15px;
  box-shadow: 5px 5px 15px var(--color-grey);
  background-color: var(--color-white);
  transform: scale(1);
  transition: transform 0.2s;
  &:hover { 
    cursor: pointer;
      //We need this important to override the transform that happens from animejs.
    transform: scale(1.02) !important;
  }
}

.artistPhoto {
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 1;
  object-fit: cover;
}

.artistName {
  display: block;
  font-weight: 700; 
  margin-bottom: 15px;
}

.genreContainer{ 
  display: flex;
  flex-wrap: wrap;
}

.genreLabel {
  margin-right: 15px;
  margin-bottom: 10px;
}

</style>