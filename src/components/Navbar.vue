<template>
  <nav id="nav">
    <router-link to="/" class="siteTitle">SpotifAPI<i class="fab fa-spotify"></i></router-link>
    <div class="searchBar">
      <i class="fas fa-search"></i>
    </div>
    <hr>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/styles/imports.scss';
nav {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 3fr 1fr;
  padding: 0 10px 25px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  @include xl {
    max-width: 1600px;
  }
}

hr {
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid var(--color-grey);
  grid-column: 1 / -1;
  @include m {
    width: 90%;
  }
  @include xl {
    width: 95%;
  }
}

.siteTitle {
  font-weight: 500;
  font-size: 2rem;
}

.fa-spotify { 
  margin-left: 5px;
  color: var(--color-green);
}

.searchBar {
  justify-self: end;
}
</style>