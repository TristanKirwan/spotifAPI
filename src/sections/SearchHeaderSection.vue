<template>
  <section class="searchHeaderSection">
    <div class="headerWrapper">
      <Container>
        <div class="content">
          <h1>Search <span class="brandName">Spotify</span></h1>
          <SearchBar />
        </div>
      </Container>  
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="searchWave"><path fill="#2c394b25" d="m0 192 6.2 16c6.1 16 18.8 48 30.8 58.7C49.2 277 62 267 74 256c12.2-11 24-21 37-16 12.1 5 24 27 37 5.3 12-21.3 24-85.3 37-106.6 11.9-21.7 24 .3 37 10.6 11.8 10.7 24 10.7 36 5.4 12.8-5.7 25-15.7 37 0 12.7 16.3 25 58.3 37 74.6 12.6 15.7 25 5.7 37-10.6 12.5-15.7 25-37.7 37-53.4 12.5-16.3 25-26.3 37-26.6 12.4.3 25 10.3 37 5.3 12.3-5 25-27 37-26.7 12.2-.3 25 21.7 37 10.7 12.2-11 24-53 37-48 12.1 5 24 59 37 58.7 12 .3 24-53.7 37-37.4C676.9 117 689 203 702 240c11.8 37 24 27 36-16 12.8-43 25-117 37-133.3 12.7-15.7 25 26.3 37 58.6 12.6 31.7 25 53.7 37 26.7 12.5-27 25-101 37-128 12.5-27 25-5 37 21.3C935.4 96 948 128 960 160c12.3 32 25 64 37 42.7 12.2-21.7 25-95.7 37-101.4 12.2-5.3 24 58.7 37 101.4 12.1 42.3 24 64.3 37 26.6 12-37.3 24-133.3 37-144 11.9-10.3 24 63.7 37 74.7 11.8 11 24-43 36-64 12.8-21 25-11 37-21.3 12.7-10.7 25-42.7 37-21.4 12.6 21.7 25 95.7 37 112 12.5 15.7 25-26.3 37-53.3 12.5-27 25-37 37-26.7 12.4 10.7 25 42.7 31 58.7l6 16V0H0Z"/></svg>
  </section>
</template>

<script>
import Container from '@/components/Container';
import SearchBar from '@/components/Search'

export default {
name: 'SearchHeaderSection',
components: {
  Container,
  SearchBar
}
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';

.searchHeaderSection{
  position: relative;
}

.headerWrapper {
  background-color: var(--color-grey);
  padding: 20px 0px;
}

.searchWave {
  position: absolute;
}
.content {
  display: grid;
  max-width: 400px;
  grid-gap: 25px;
  margin: 0 auto;
  @include m {
    max-width: 600px;
  }
}

h1 {
  text-align: center;
  font-size: 44px;
  @include m {
    font-size: 66px;
  }
}

.brandName {
  color: var(--color-green);
  text-decoration: underline;
  text-decoration-color: var(--color-black);
}
</style>