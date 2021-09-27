<template>
  <div v-if="isLoading" class="loadingIconContainer">
    <LoadingSpinner />
  </div>
  <Container v-else size="small">
    <router-link to="/search" class="backButton"><i class="fas fa-chevron-down chevron"></i>Go back</router-link>
    <div class="albumContainer">
      <div class="albumHeader">
        <img :alt="albumAlt" :src="imgSourceBig" class="albumCover desktop"/>
        <img :alt="albumAlt" :src="imgSourceSmall" class="albumCover mobile"/>
        <div class="coreInfo">
          <h1>{{this.data.name}}</h1>
          <h2>{{artistString}}</h2>
        </div>
        <div class="metaInfo">
          <span v-if="this.data.release_date" class="infoWrapper"><i class="fas fa-calendar-day icon"></i>{{this.data.release_date}}</span>
          <span v-if="this.data.total_tracks" class="infoWrapper"><i class="fas fa-music icon"></i>{{this.data.total_tracks}}</span>
          <span v-if="this.data.total_tracks" class="infoWrapper"><i class="far fa-clock icon"></i>{{albumDuration}}</span>
          <a v-if="this.data.external_urls.spotify" :href="this.data.external_urls.spotify" target="_blank" rel="noopener noreferrer" class="infoWrapper"><i class="fas fa-external-link-alt icon"></i>Check out album</a>
        </div>
      </div>
      <div class="tracksContainer">
        <TrackCard v-for="track in this.data.tracks.items" :key="track.id" :data="track"/>
      </div>
    </div>
  </Container>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue'
import Container from '../components/Container.vue'
import TrackCard from '../components/cards/TrackCard.vue'

import getAlbumDuration from '../utils/getAlbumDuration'
import createArtistString from '../utils/createArtistString'

export default {
name: 'Album',
components: {
  LoadingSpinner,
  Container,
  TrackCard
},
data() {
  return {
    albumId: this.$route.params.id,
    data: null,
    isLoading: true
  }
},
computed: {
  artistString(){
    return createArtistString(this.data.artists)
  },
  albumAlt() {
    return `Album cover for the album ${this.data.name} by ${this.artistString}`
  },
  imgSourceBig() {
    return this.getImgSource(0)
  },
  imgSourceSmall() {
    return this.getImgSource(1)
  },
  albumDuration() {
    return getAlbumDuration(this.data.tracks.items)
  }
},
methods: {
  getImgSource(i){
     if(!Array.isArray(this.data.images) || this.data.images.length <= 0) return ''
    if(!this.data.images[i].url) return ''
    return this.data.images[i].url
  }
},
async created(){
    const result = await fetch(`${process.env.VUE_APP_baseUrl}/album`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: this.albumId
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
        //Redirect to 404?
        console.log('This id does not exist')
      }
      else if(data.message = 'Success'){
        console.log(data)
        this.data = data.data
        this.isLoading = false
      }
    })
    .catch(err => console.error(err))
  }
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';

.loadingIconContainer{
  width: 100%;
  display: flex;
  justify-content: center;
}

.albumHeader {
  display: grid;
  grid-gap: 15px;
  @include m {
    grid-template-columns: 300px 1fr;
    grid-template-rows: repeat(2, auto);
  }
}

.albumCover {
  justify-self: center;
  &.desktop {
    display: none;
    @include m {
      display: block;
      width: 100%;
      grid-row: 1 / -1;
    }
  }
  &.mobile {
    display: block;
    @include m {
      display: none;
    }
  }
}

h2 {
  font-weight: 400;
  font-style: italic;
}

.metaInfo {
  display: grid;
  grid-gap: 5px;
  @include m {
    grid-template-columns: repeat(2, max-content);
    align-items: end;
    align-self: end;
    grid-gap: 15px;
  }
  a{
    text-decoration: underline;
  }
}

.icon {
  margin-right: 10px;
  color: var(--color-green);
}

.infoWrapper{
  color: var(--color-gray);
}

.tracksContainer{
  display: grid;
  grid-gap: 5px;
}

.albumContainer{
  display: grid;
  grid-gap: 50px;
}

.chevron{
  transform: translateX(0px) rotate(90deg);
  transition: transform 0.2s;
}

.backButton {
  display: inline-block;
  opacity: 0.5;
  margin-bottom: 10px;
  &:hover {
    .chevron{
      transform: translateX(-3px) rotate(90deg)
    }
  }
}

</style>