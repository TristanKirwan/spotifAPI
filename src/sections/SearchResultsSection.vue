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
      <template v-if="!hasSearched">
        <NoSearchSection />
      </template>
      <template v-else>
        <template v-if="!hasAnyResults">
          <NoResultsSection />
        </template>
        <template v-else>
          <div class="tracksContainer categoryContainer" id="search-results-tracks">
            <span class="categoryTitle">Tracks:</span>
            <TrackCard v-for="track in trackResults.items" :key="track.id" :data="track" />
            <div class="viewMoreButtonContainer" v-if="trackResults.items.length > 5 && !showingAllTracks">
              <button class="viewMoreButton" @click="viewAllTracks">View more<i class="fas fa-chevron-down"></i></button>
            </div>
          </div>
          <div class="playlistContainer categoryContainer" id="search-results-playlists">
            <span class="categoryTitle">Playlists:</span>
            <PlaylistCard v-for="playlist in playlistResults.items" :key="playlist.id" :data="playlist"/>
            <div class="viewMoreButtonContainer" v-if="playlistResults.items.length > 5 && !showingAllPlaylists">
              <button class="viewMoreButton" @click="viewAllPlaylists">View more<i class="fas fa-chevron-down"></i></button>
            </div>
          </div>
          <div class="artistsContainer categoryContainer" id="search-results-artists">
            <span class="categoryTitle">Artists:</span>
            <ArtistCard v-for="artist in artistResults.items" :key="artist.id" :data="artist"/>
            <div class="viewMoreButtonContainer" v-if="artistResults.items.length > 5 && !showingAllArtists">
              <button class="viewMoreButton" @click="viewAllArtists">View more<i class="fas fa-chevron-down"></i></button>
            </div>
          </div>
          <div class="albumsContainer categoryContainer" id="search-results-albums">
            <span class="categoryTitle">Albums:</span>
            <AlbumCard v-for="album in albumResults.items" :key="album.id" :data="album"/>
            <div class="viewMoreButtonContainer" v-if="albumResults.items.length > 5 && !showingAllAlbums">
              <button class="viewMoreButton" @click="viewAllAlbums">View more<i class="fas fa-chevron-down"></i></button>
            </div>
          </div>
        </template>
      </template>
    </Container>
  </div>

</section>

</template>

<script>
import SearchResultsHeader from '@/components/SearchResultsHeader'
import NoSearchSection from '@/components/NoSearchSection'
import NoResultsSection from '@/components/NoResultsSection'
import Container from '@/components/Container'
import AlbumCard from '@/components/cards/AlbumCard'
import ArtistCard from '@/components/cards/ArtistCard'
import TrackCard from '@/components/cards/TrackCard'
import PlaylistCard from '@/components/cards/PlaylistCard'

import animateElementsIn from '@/utils/animateElementsIn'; 

export default {
name: 'Component',
components: {
  SearchResultsHeader,
  Container,
  AlbumCard,
  ArtistCard,
  TrackCard,
  PlaylistCard,
  NoSearchSection,
  NoResultsSection
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
  },
  hasSearched: {
    type: Boolean,
    default: false
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
  },
  hasAnyResults(){
    if(this.amountAlbums > 0 || this.amountArtists > 0 || this.amountPlaylists > 0 || this.amountTracks > 0){
      return true
    }
    return false
  }
},
watch: {
  $props: {
    handler() {
      this.resetAllViewingOptions();
    },
    deep: true
  }
},
methods: {
  resetAllViewingOptions(){
    this.showingAllTracks = false
    this.showingAllPlaylists = false
    this.showingAllArtists = false
    this.showingAllAlbums = false
  },
  viewAllTracks() {
    this.showingAllTracks = true
    animateElementsIn('track', 'tracksContainer')
  },
  viewAllPlaylists(){
    this.showingAllPlaylists = true
    animateElementsIn('playlist', 'playlistContainer')
  },
  viewAllArtists(){
    this.showingAllArtists = true
    animateElementsIn('artistCard', 'artistsContainer', true)
  },
  viewAllAlbums(){
    this.showingAllAlbums = true
    animateElementsIn('albumCard', 'albumsContainer', true)
  },
}
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';

.searchResultsSection {
  display : grid;
  grid-gap: 50px;
  @include m {
    grid-gap: 100px;
  }
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
  &.view-all{
    :nth-child(n+7){
      display: grid;    
    }
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
  .viewMoreButtonContainer{
    display: flex;
    justify-content: center;
    opacity: 1;
    transform: translateY(0);
    grid-column: 1 / -1;
  }
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
</style>