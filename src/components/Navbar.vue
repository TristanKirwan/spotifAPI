<template>
  <nav id="nav" :class="{hasBackground: shouldHaveBackground}">
    <div class="content">
      <router-link to="/" class="siteTitle">SpotifAPI<i class="fab fa-spotify"></i></router-link>
      <div class="searchBar" v-if="hasAccessToken">
        <i class="fas fa-search"></i>
      </div>
      <hr>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapState([
    'hasAccessToken'
  ]),
  data() {
    return {
      shouldHaveBackground: false
    }
  },
  watch : {
    $route(newValue) {
      const routesWithBackground = ['Search']
      this.shouldHaveBackground = routesWithBackground.indexOf(newValue.name) >= 0
    }
  },
}
</script>


<style lang="scss" scoped>
@import '@/styles/imports.scss';
.hasBackground {
  background-color: var(--color-grey)
}

.content {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 3fr 1fr;
  padding: 0 20px 25px;
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