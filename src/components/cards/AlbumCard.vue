<template>
<!-- TODO: Implement click-through to album page -->
  <div class="albumCard">
    <div class="overlayContainer">
      <CardOverlayPill>
        {{albumType}}
      </CardOverlayPill>
    </div>
    <img :alt="albumAltText" :src="imgSrc" class="albumCover"/>
    <span class="albumTitle">{{albumTitle}}</span>
    <span class="albumArtists">{{artistString}}</span>
    <span><i class="fas fa-music trackCountIcon"></i><span>{{trackCount}}</span></span>
  </div>
</template>

<script>
import CardOverlayPill from '@/components/CardOverlayPill';

export default {
  name: 'AlbumCard',
  components: {
    CardOverlayPill
  },
  props: ['data'],
  data() {
    return {
      imgSrc: this.data.images[1].url || '',
      albumTitle: this.data.name,
      albumType: this.data.album_type,
      trackCount: this.data.total_tracks
    }
  },
  computed: {
    albumAltText(){
      return `Album cover for ${this.data.name} by ${this.artistString}`
    },
    artistString(){
      return this.createArtistString();
    }
  },
  created() {
    console.log(this.data)
  },
  methods: {
    createArtistString(){
      const artistsArray = this.data.artists
      if(artistsArray.length === 1) return artistsArray[0].name
      let artistString = ''
      for(let i = 0; i < artistsArray.length; i ++) {
        artistString += `${artistsArray[i].name} & `
      }
      const finalString = artistString.substr(0, artistString.length - 3)
      return finalString
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';
.albumCard {
  position: relative;
  display: grid;
  grid-gap: 15px;
  padding: 20px;
  box-shadow: 5px 5px 15px var(--color-grey);
  background-color: var(--color-white);
  transition: transform 0.2s;
  transform: scale(1);
  &:hover{ 
    transform: scale(1.02);
  }
}

.overlayContainer{
  position: absolute;
  left: 0;
  top: 30px;
}

.albumCover{
  width: 100%;
}

.albumTitle{
  font-weight: 500;
  font-size: 18px;
}

.albumArtists{
  font-size: 14px;
}

.trackCountIcon{
  color: var(--color-green);
  margin-right: 5px;
}
</style>