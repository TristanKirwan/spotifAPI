<template>
  <div v-if="isLoading" class="loadingIconContainer">
    <LoadingSpinner />
  </div>
  <template v-else>
    <div class="imageContainer">
      <span class="imageOverlay"></span>
      <img :alt="artistAlt" :src="imgSourceBig" class="artistPicture desktop"/>
      <img :alt="artistAlt" :src="imgSourceSmall" class="artistPicture mobile"/>
      <router-link to="/search" class="backButton"><i class="fas fa-chevron-down chevron"></i>Go back</router-link>
      <Container size="small">
        <h1 class="artistName">{{data.name}}</h1>
      </Container>
    </div>
    <Container size="small">
      <div class="infoContainer">
        <div class="genresContainer categoryContainer">
          <GeneralPill v-for="genre in data.genres" :key="genre">{{genre}}</GeneralPill>
        </div>
        <div class="tracksContainer categoryContainer">
          <span class="title">
           <h2>Top tracks:</h2>
            <InformationBubble type="topTracks" />          
          </span>
          <TrackCard v-for="popularTrack in data.topTracks" :key="popularTrack.id" :data="popularTrack"/>
          <div class="viewMoreButtonContainer" v-if="data.topTracks.length > 5 && !showingAllTracks">
            <button class="viewMoreButton" @click="viewAllTracks">View more<i class="fas fa-chevron-down"></i></button>
          </div>
        </div>
        <div class="albumsContainer categoryContainer">
          <span class="title">
            <h2>Albums:</h2>
            <InformationBubble type="albumsWithDifferentMarkets" />
          </span>
          <AlbumCard v-for="album in data.albums" :key="album.id" :data="album" />
          <div class="viewMoreButtonContainer" v-if="data.albums.length > 5 && !showingAllAlbums">
            <button class="viewMoreButton" @click="viewAllAlbums">View more<i class="fas fa-chevron-down"></i></button>
          </div>
        </div>
        <div class="relatedArtists categoryContainer">
          <span class="title">
            <h2>Related artists:</h2>
          </span>
          <ArtistCard v-for="relatedArtist in data.relatedArtists" :key="relatedArtist.id" :data="relatedArtist"/>
          <div class="viewMoreButtonContainer" v-if="data.relatedArtists.length > 5 && !showingAllRelatedArtists">
            <button class="viewMoreButton" @click="viewAllRelatedArtists">View more<i class="fas fa-chevron-down"></i></button>
          </div>
        </div>
      </div>
    </Container>
  </template>
  <!-- TODO: show more/less buttons. information icons about albums in different regions. Headers for all of the subsections... -->

</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import Container from '../components/Container.vue'
import TrackCard from '../components/cards/TrackCard';
import AlbumCard from '../components/cards/AlbumCard';
import GeneralPill from '../components/GeneralPill';
import ArtistCard from '../components/cards/ArtistCard';
import InformationBubble from '../components/InformationBubble.vue';

import animateElementsIn from '../utils/animateElementsIn';
import scrollToTop from '../utils/scrollToTop';

export default {
name: 'Artist',
components: {
  LoadingSpinner,
  Container,
  TrackCard,
  AlbumCard,
  GeneralPill,
  ArtistCard,
  InformationBubble
},
data(){
  return {
    isLoading: true,
    artistId: this.$route.params.id,
    data: null,
    showingAllTracks: false,
    showingAllAlbums: false,
    showingAllRelatedArtists: false,
  }
},
computed:{
  artistAlt(){
    return `Image of the artist ${this.data.name}`
  },
  imgSourceBig(){
    return this.getImgSource(0)
  },
  imgSourceSmall() {
    return this.getImgSource(1)
  }
},
methods: {
  getImgSource(i){
    if(!Array.isArray(this.data.images) || this.data.images.length <= 0) return ''
    if(!this.data.images[i].url) return ''
    return this.data.images[i].url
  },
  viewAllTracks(){
    this.showingAllTracks = true;
    animateElementsIn('track', 'tracksContainer')
  },
  viewAllAlbums() {
    this.showingAllAlbums = true;
    animateElementsIn('albumCard', 'albumsContainer')
  },
  viewAllRelatedArtists(){
    this.showingAllRelatedArtists = true;
    animateElementsIn('artistCard', 'relatedArtists')
  },
  async getArtistData(){
    const result = await fetch(`${process.env.VUE_APP_baseUrl}/artist`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: this.artistId
      })
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      if(data.message === 'No Auth token provided.') {
        //TODO: Fix a redirect or whatever
        console.log('Caught no auth token!')
      }
      if(data.message === 'invalid id') {
        //TODO: Redirect to 404?
        console.log('This id does not exist')
      }
      else if(data.message = 'Success'){
        this.data = data
        this.isLoading = false
      }
    })
    .catch(err => console.error(err))
  }
},
watch : {
  $route(newValue, oldValue) {
    const oldParams = oldValue.params.id;
    const newParams = newValue.params.id;
    if(oldParams !== newParams && newParams) {
      this.showingAllTracks = false;
      this.showingAllAlbums - false;
      this.showingAllRelatedArtists = false;
      this.artistId = newParams
      this.getArtistData()
      scrollToTop()
    }
  }
},
async created(){
  this.getArtistData()
  }
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';


.artistPicture{
  width: 100vw;
  max-width: 100vw;
  display: block;
  max-height: 300px;
  object-fit: cover;
  @include m {
    max-height: 450px;
  }
  &.mobile {
    @include m {
      display: none; 
    }
  }
  &.desktop{
    display: none;
    @include m {
      display: block;
    }
  }
}

.backButton {
  display: inline-block;
  position: absolute;
  top: 15px;
  left: 5px;
  color: var(--color-white);
  margin-bottom: 10px;
  &:hover {
    .chevron{
      transform: translateX(-3px) rotate(90deg)
    }
  }
}

.chevron{
  transform: translateX(0px) rotate(90deg);
  transition: transform 0.2s;
}

.imageContainer{
  position: relative;
  overflow: hidden;
}

.imageOverlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-grey);
}

.artistName{
  color: var(--color-white);
  position: absolute;
  bottom: 15px;
  padding-left: 0px;
  font-size: 42px;
  word-break: break-word;
}

.infoContainer {
  display: grid;
  grid-gap: 25px;
  margin-top: 25px;
  @include m {
    grid-gap: 100px;
  }
}

.genresContainer{
  display: flex;
  flex-wrap: wrap;
}

.generalPill {
  margin-right: 5px;
  margin-bottom: 5px;
}

.albumsContainer, .relatedArtists {
  grid-gap: 15px;
}

.albumsContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @include xs {
    grid-template-columns: 1fr;
  }
  @include m {
    grid-template-columns: repeat(4, 1fr);
  }
}

.relatedArtists{
  display: grid;
  @include m {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tracksContainer {
  display: grid;
  grid-gap: 5px;
  .viewMoreButtonContainer {
    margin-top: 10px;
  }
}

.categoryContainer {
  :nth-child(n+7){
    display: none;
    opacity: 0;
    transform: translateY(10px);
  }
  &.view-all{
    :nth-child(n+7){
      display: grid;    
    }
  } 
}

.title {
  display: flex;
  grid-column: 1 / -1;
  justify-content: space-between;
}

.viewMoreButton{
  padding: 15px;
  background-color: var(--color-black);
  font-weight: 600;
  color: var(--color-white);
  border-radius: 25px;
  transition: transform 0.2s;
  transform: translateY(0px);
  text-transform: uppercase;
  &:hover{
    cursor: pointer;
    transform: translateY(2px);
    i{
      transform: translateY(2px);
    }
  }
  i {
    margin-left: 5px;
    transition: transform 0.2s;
    transform: translateY(0);
  }
}

.categoryContainer {
  .viewMoreButtonContainer{
    display: flex;
    justify-content: center;
    opacity: 1;
    transform: translateY(0);
    grid-column: 1 / -1;
  }
}
</style>