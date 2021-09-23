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
import createArtistString from '@/utils/createArtistString';

export default {
  name: 'AlbumCard',
  components: {
    CardOverlayPill
  },
  props: ['data'],
  data() {
    return {
      //TODO: Fix this placeholder
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
      return createArtistString(this.data.artists);
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
    //We need this important to override the transform that happens from animejs.
    transform: scale(1.02) !important;
    cursor: pointer;
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