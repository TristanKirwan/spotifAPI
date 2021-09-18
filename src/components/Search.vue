<template>
  <div class="searchContainer">
    <input type="text" v-model="searchTerm" v-on:keydown.enter="submitSearchTerm" placeholder="Artists, albums podcasts.. anything!" class="input"/>
    <span class="iconContainer">
      <i class="fas fa-search searchIcon"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchTerm: ""
    }
  },
  methods: {
    submitSearchTerm() {
      this.$router.push({
        name: "Search",
        query: {
          searchTerm: this.searchTerm
        }
      })
    }
  },
  created() {
    if(this.$route.query.searchTerm){
      this.searchTerm = this.$route.query.searchTerm
    }
  }
}
</script>

<style scoped lang="scss">

  .searchContainer {
    display: inline-block;
    position: relative;
    width: 100%;
  }

  .iconContainer {
    position: absolute;
    right: 0px;
    top: 50%;
    display: inline-grid;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
    justify-items: center;
    background-color: var(--color-teal);
    transform: translateY(-50%);
  }

  .input{
    width: 100%;
  }

  .searchIcon {
    color: var(--color-white);
  }

  input {
    border: 1px solid var(--color-grey);
    border-radius: 25px;
    padding: 10px 50px 10px 20px;
    font-size: var(--font-lg);
    &:focus {
      outline: none;
    }
  }
</style>