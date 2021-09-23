<template>
<section class="searchResultsSection">
  <SearchResultsHeader 
    :amountAlbums="amountAlbums"
    :amountArtists="amountArtists"
    :amountPlaylists="amountPlaylists"
    :amountTracks="amountTracks"
  />
  <div>
    <Container propClass="resultsContainer">
      <div class="tracksContainer categoryContainer" id="search-results-tracks">
        <span class="categoryTitle">Tracks:</span>
        <TrackCard v-for="track in trackResults.items" :key="track.id" :data="track" />
        <button class="viewMoreButton" v-if="trackResults.items.length > 5 && !showingAllTracks" @click="viewAllTracks">View more</button>
      </div>
      <div class="playlistContainer categoryContainer" id="search-results-playlists">
        <span class="categoryTitle">Playlists:</span>
        <PlaylistCard v-for="playlist in playlistResults.items" :key="playlist.id" :data="playlist"/>
        <button class="viewMoreButton" v-if="playlistResults.items.length > 5 && !showingAllPlaylists" @click="viewAllPlaylists">View more</button>
      </div>
      <div class="artistsContainer categoryContainer" id="search-results-artists">
        <span class="categoryTitle">Artists:</span>
        <ArtistCard v-for="artist in artistResults.items" :key="artist.id" :data="artist"/>
        <button class="viewMoreButton" v-if="artistResults.items.length > 5 && !showingAllArtists" @click="viewAllArtists">View more</button>
      </div>
      <div class="albumsContainer categoryContainer" id="search-results-albums">
        <span class="categoryTitle">Albums:</span>
        <AlbumCard v-for="album in albumResults.items" :key="album.id" :data="album"/>
        <button class="viewMoreButton" v-if="albumResults.items.length > 5 && !showingAllAlbums" @click="viewAllAlbums">View more</button>
      </div>
    </Container>
  </div>

</section>

</template>

<script>
import SearchResultsHeader from '@/components/SearchResultsHeader'
import Container from '@/components/Container'
import AlbumCard from '@/components/cards/AlbumCard'
import ArtistCard from '@/components/cards/ArtistCard'
import TrackCard from '@/components/cards/TrackCard'
import PlaylistCard from '@/components/cards/PlaylistCard'

import anime from 'animejs'

export default {
name: 'Component',
components: {
  SearchResultsHeader,
  Container,
  AlbumCard,
  ArtistCard,
  TrackCard,
  PlaylistCard
},
props: {
  albumResults: {
    type: Object,
    default: []
  },
  artistResults: {
    type: Object,
    default: []
  },
  playlistResults: {
    type: Object,
    default: []
  },
  trackResults: {
    type: Object,
    default: []
  }
},
data(){
  return {
    showingAllTracks: false,
    showingAllPlaylists: false,
    showingAllArtists: false,
    showingAllAlbums: false,
  }
},
computed: {
  amountAlbums(){
    if(this.albumResults.items === undefined) return 0
    return this.albumResults.items.length;
  },
  amountArtists(){
    if(this.artistResults.items === undefined) return 0
    return this.artistResults.items.length;
  },
  amountPlaylists(){
    if(this.playlistResults.items === undefined) return 0
    return this.playlistResults.items.length;
  },
  amountTracks(){
    if(this.trackResults.items === undefined) return 0
    return this.trackResults.items.length
  }
},
methods: {
  viewAllTracks() {
    this.showingAllTracks = true
    this.animateItems('track')
  },
  viewAllPlaylists(){
    this.showingAllPlaylists = true
    this.animateItems('playlist')
  },
  viewAllArtists(){
    this.showingAllArtists = true
    this.animateItems('artistCard', true)
  },
  viewAllAlbums(){
    this.showingAllAlbums = true
    this.animateItems('albumCard', true)
  },

  animateItems(itemClass, isBigItem = false){
    const allElements = document.querySelectorAll(`div.${itemClass}`)
    // All elements returns a Nodelist Object, which is not an array.
    const allElementsArray = Array.from(allElements)
    const animateElements = allElementsArray.slice(5)

    const intialTranslation = isBigItem ? 250 : 100

    const tl = anime.timeline({
      easing: 'linear',
      duration: 200
    })

    for(let i = 0; i < animateElements.length; i++) {
      tl.add({
        targets: animateElements[i],
        translateY: [`${intialTranslation}px`,'0px'],
        opacity: '1',
        begin: function() {
          animateElements[i].style.display = 'grid'
        }
      }, '-=125')
    }
  },
}
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';

.searchResultsSection {
  display : grid;
  grid-gap: 30px;
}

.resultsContainer{
  display: grid;
  align-items: start;
  grid-gap: 15px;
  @include m {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px 25px;
  }
}

.categoryContainer {
  display: grid;
  grid-gap: 15px;
  :nth-child(n+7){
    display: none;
    opacity: 0;
    transform: translateY(10px);
  }
}

.albumsContainer{
  grid-template-columns: repeat(2, 1fr);
  @include xs {
    grid-template-columns: 1fr;
  }
  @include m {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    grid-column: span 2;
  }
  @include l {
    grid-template-columns: repeat(5, 1fr);
  }
  @include xl {
    grid-template-columns: repeat(6, 1fr);
  }
   :nth-child(n+7){
    display: none;
    opacity: 0;
    transform: translateY(250px);
  }
}

.artistsContainer {
  @include m {
    grid-template-columns: repeat(2, 1fr);
    grid-column: span 2;
  }
  @include xl {
    grid-template-columns: repeat(3, 1fr);
  }
}

.playlistContainer, .tracksContainer{
  @include m {
    grid-column: span 1;
  }
}

.categoryTitle {
  font-weight: 700;
  font-size: 24px;
  grid-column: 1 / -1;
}

.categoryContainer {
  button { 
    &.viewMoreButton{
      display: block;
      opacity: 1;
      transform: translateY(0);
      grid-column: 1 / -1;
    }
  }
}
</style>