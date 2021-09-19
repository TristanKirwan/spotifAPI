<template>
<section class="searchResultsSection">
  <SearchResultsHeader 
    :amountAlbums="amountAlbums"
    :amountArtists="amountArtists"
    :amountPlaylists="amountPlaylists"
    :amountTracks="amountTracks"
  />
  <div class="resultsContainer">
    <Container>
      <div class="albumsContainer" id="search-results-albums">
        <span class="categoryTitle">Albums:</span>
        <AlbumCard v-for="album in albumResults.items" :key="album.id" :data="album"/>
      </div>
    </Container>
  </div>

</section>

</template>

<script>
import SearchResultsHeader from '@/components/SearchResultsHeader'
import AlbumCard from '@/components/cards/AlbumCard'
import Container from '@/components/Container'

export default {
name: 'Component',
components: {
  SearchResultsHeader,
  AlbumCard,
  Container
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
computed: {
  amountAlbums(){
    if(this.albumResults.items === undefined) return 0
    return this.albumResults.items.length;
  },
  amountArtists(){
    if(this.albumResults.items === undefined) return 0
    return this.artistResults.items.length;
  },
  amountPlaylists(){
    if(this.albumResults.items === undefined) return 0
    return this.playlistResults.items.length;
  },
  amountTracks(){
    if(this.albumResults.items === undefined) return 0
    return this.trackResults.items.length
  }
}
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';

.searchResultsSection {
  display : grid;
  grid-gap: 30px;
}

.albumsContainer{
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  @include xs {
    grid-template-columns: 1fr;
  }
  @include m {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
  @include l {
    grid-template-columns: repeat(5, 1fr);
  }
  @include xl {
    grid-template-columns: repeat(6, 1fr);
  }
}

.categoryTitle {
  font-weight: 700;
  font-size: 24px;
  grid-column: 1 / -1;
}
</style>