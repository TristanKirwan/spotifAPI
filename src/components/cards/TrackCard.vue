<template>
  <div class="track">
    <i class="fas fa-music musicIcon"></i>
    <div class="trackInfoContainer">
      <span class="title">{{title}}</span>
      <span class="artists">{{artistString}}</span>
    </div>
    <span class="duration">
      {{songDuration}}
    </span>
  </div>
</template>

<script>
import createArtistString from '@/utils/createArtistString'
import songDurationToMinuteString from '@/utils/songDurationToMinuteString'

export default {
name: 'TrackCard',
props: ['data'],
data() {
  return {
    title: this.data.name,
  }
},
computed: {
  artistString(){
    return createArtistString(this.data.artists || [])
  },
  songDuration(){
    return songDurationToMinuteString(this.data.duration_ms || 0)
  }
},
}
</script>

<style scoped lang='scss'>
.track{ 
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-gap: 20px;
  align-items: center;
  box-shadow: 5px 5px 15px var(--color-grey);
  padding: 5px 10px;
  transform: translateY(0px);
  transition: transform 0.2s;
  background-color: var(--color-white);
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }

}

.musicIcon{
  color: var(--color-green);
}

.title{
  font-weight: 500;
}

.artists{
  font-weight: 300;
  font-size: 12px;
  font-style: italic;
}

.trackInfoContainer{
  display: grid;
}
</style>