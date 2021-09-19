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
      </div>
      <div class="playlistContainer categoryContainer" id="search-results-playlists">
        <span class="categoryTitle">Playlists:</span>
        <PlaylistCard v-for="playlist in playlistResults.items" :key="playlist.id" :data="playlist"/>
      </div>
      <div class="artistsContainer categoryContainer" id="search-results-artists">
        <span class="categoryTitle">Artists:</span>
        <ArtistCard v-for="artist in artistResults.items" :key="artist.id" :data="artist"/>
      </div>
      <div class="albumsContainer categoryContainer" id="search-results-albums">
        <span class="categoryTitle">Albums:</span>
        <AlbumCard v-for="album in albumResults.items" :key="album.id" :data="album"/>
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
  @include m {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px 25px;
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


.categoryContainer {
  display: grid;
  grid-gap: 15px;
}

.categoryTitle {
  font-weight: 700;
  font-size: 24px;
  grid-column: 1 / -1;
}
</style>