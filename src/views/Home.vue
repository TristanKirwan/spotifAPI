<template>
  <div class="home">
    <Container propClass="containerClass">
      <h1>Use <span class="spotifyTitle">Spotify</span> without opening spotify!</h1>
      <div class="intro">
        <p class="introText">
          Mess around with the spotify API to do anything you could normally do (and maybe even less!), but without having to open Spotify!
        </p>
      <div class="buttonContainer">
        <Button>Check out whats popular</Button>
      </div>
      </div>
      <div class="mainContent">
        <div class="svgWrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860.101 966.531"><g data-name="Layer 2"><g data-name="Layer 1"><path data-name="Path 1" d="M405.691 6.317c114.24-32.88 269.75 66.91 358.82 199.11s111.68 297 55.49 404.05c-56 107.25-190.49 156.91-322.22 225.22s-260.43 155-353.45 126.13-150.15-173.46-143.86-291.2c6.06-117.74 75.78-208.2 146.89-336.44 71.34-128.19 144.08-293.77 258.33-326.87Z" fill="rgba(85,203,71,0.25)"/><path data-name="Path 2" d="M99.001 479.857c0 58.43 49.89 74.2 49.89 131.48 0 59.1-24.54 90.26-24.54 128 0 81.69 67.66 152.94 151.46 152.94 80.21 0 144.43-70.23 144.43-155.9 0-74.64-27.77-70.5-8.89-146.28 26.47-106.2 104.41-149.74 229.19-149.74 155.93 0 217.53 138 217.53 243.28 0 164.07-126.71 243.06-209.2 215.54-156-52-107.78-207.61-55.87-250" fill="none" stroke="#fed892" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.06"/><path data-name="Path 3" d="m56.001 391.997 9 45.08" fill="none" stroke="#1f363d" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.03"/><path data-name="Path 4" d="m62.521 410.237 15.48-3.1 11.88 59.34-15.48 3.09Z" fill="#fed892" fill-rule="evenodd"/><path data-name="Path 5" d="M146.461 363.457a14 14 0 0 0-21-9.19 82.26 82.26 0 0 0 30.24 151 14 14 0 0 0 15.89-16.58Z" fill="#1f363d" fill-rule="evenodd"/><path data-name="Path 6" d="m455.301 312.047 9 45.09" fill="none" stroke="#1f363d" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.03"/><path data-name="Path 7" d="m456.341 331.377-16 3.2 11.88 59.34 16-3.21Z" fill="#fed892" fill-rule="evenodd"/><path data-name="Path 8" d="M360.781 320.197a13.76 13.76 0 0 1 15.63-16.31 82.26 82.26 0 0 1 30.29 151.26 13.76 13.76 0 0 1-20.7-9Z" fill="#1f363d" fill-rule="evenodd"/><path data-name="Path 9" d="m73.671 400.327 16.91-3.39 16.61 82.95-16.91 3.39Z" fill="#518596" fill-rule="evenodd"/><path data-name="Path 10" d="m442.221 326.517-16.9 3.39 16.61 82.95 16.91-3.39Z" fill="#518596" fill-rule="evenodd"/><path data-name="Path 11" d="M53.191 380.677c-22.07-110.22 49.39-217.48 159.62-239.55s217.48 49.39 239.55 159.62" fill="none" stroke="#1f363d" stroke-linecap="round" stroke-linejoin="round" stroke-width="26.35"/><path data-name="Path 12" d="M700.141 726.997a13.089 13.089 0 0 1-2.72-.29l-153-32.38c-8.76-1.85-14-12.23-11.71-23.13l73.84-348.88c2-9.51 9.48-16.69 17.36-16.69a13.16 13.16 0 0 1 2.72.29l153 32.38c8.76 1.86 14 12.23 11.71 23.13l-73.84 348.89c-2.01 9.51-9.5 16.68-17.36 16.68Z" fill="#fff" fill-rule="evenodd"/><path data-name="Path 13" d="M623.901 300.637v10a7.93 7.93 0 0 1 1.68.18l153 32.38c6 1.27 9.56 9.15 7.86 17.21l-73.83 348.87c-1.54 7.26-6.9 12.73-12.47 12.73a7.928 7.928 0 0 1-1.68-.18l-153-32.38c-3.53-.75-5.54-3.63-6.42-5.27a17.77 17.77 0 0 1-1.43-11.94l73.83-348.87c1.54-7.25 6.9-12.73 12.47-12.73v-10m0 0c-10.16 0-19.68 8.53-22.25 20.66l-73.85 348.87c-2.88 13.62 4.09 26.63 15.57 29.06l153 32.39a18.437 18.437 0 0 0 3.75.39c10.16 0 19.68-8.52 22.25-20.66l73.84-348.87c2.88-13.62-4.09-26.63-15.57-29.06l-152.99-32.42a17.869 17.869 0 0 0-3.76-.4Z" fill="#40798c"/><path data-name="Path 14" d="m663.091 316.537 2.72 18 68.82 14.56 10.6-15.23Z" fill="#40798c" fill-rule="evenodd"/><path data-name="Path 15" d="m587.221 684.617 73.38 15.53" fill="none" stroke="#fed892" stroke-linecap="round" stroke-linejoin="round" stroke-width="7.87"/></g></g></svg>
        </div>
        <div class="searchBarWrapper">
          <Search />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Search from '@/components/Search';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default {
  name: 'Home',
  components: {
    Search,
    Container,
    Button
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/imports.scss';
  .home { 
    display: grid;
    grid-gap: 15px;
    @include m {
      margin-top: 25px;
    }
  }

  .containerClass {
    display: grid;
    @include m {
      align-items: start;
      grid-template-columns: 3fr 7fr;
      grid-gap: 40px;
    }
  }

  .introText{
    font-weight: 300;
  }

  h1 {
    text-align: center;
    font-size: var(--heading-1);
    margin-bottom: 15px;
    @include m {
      grid-column: 1 / -1;
      text-align: left;
    }
  }

  .spotifyTitle{
    color: var(--color-green);
  }

  .buttonContainer{
    margin-top: 15px;
  }

  .mainContent {
    position: relative;
    width: 100%;
    @include m {
      transform: translateY(-98px);
    }
  }

  .svgWrapper{
    max-width: 400px;
    margin: 0 auto;
  }

  .searchBarWrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    @include m {
      max-width: 600px;
    }
  }
</style>