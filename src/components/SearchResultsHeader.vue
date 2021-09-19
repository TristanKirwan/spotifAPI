<template>
<div class="searchResultsHeader">
  <Container>
    <div class="contentContainer">
      <a href="#search-results-tracks" class="resultCategory">
        <i class="fas fa-music"></i> {{amountTracks}}
      </a>
      <a href="#search-results-albums" class="resultCategory">
        <i class="fas fa-compact-disc"></i> {{amountAlbums}}
      </a>
      <a href="#search-results-artists" class="resultCategory">
        <i class="fas fa-users"></i> {{amountArtists}}
      </a>
      <span class="resultCategory">
        <i class="fas fa-list-ol"></i> {{amountPlaylists}}
      </span>
    </div>
  </Container>
</div>

</template>

<script>
import Container from '@/components/Container'
export default {
name: 'SearchResultsHeader',
components: {
  Container
},
props: {
  amountAlbums: {
    type: Number,
    default: 0
  },
  amountArtists: {
    type: Number,
    default: 0
  },
  amountPlaylists: {
    type: Number,
    default: 0
  },
  amountTracks: {
    type: Number,
    default: 0
  }
}
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';

.contentContainer{
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-items: center;
  justify-content: center;
  grid-gap: 25px;
  @include m {
    grid-gap: 50px;
  }
}

.resultCategory{
  font-weight: 700;
  i {
    color: var(--color-green);
    margin-right: 10px;
  }
  @include m {
    font-size: 22px;
  }
}
</style>