<template>
  <h1>What happened?</h1>
  <SearchBar />
</template>

<script>
import SearchBar from '@/components/Search'

export default {
  name: 'Search',
  components: {
    SearchBar
  }
}
</script>

<style scoped lang='scss'>
button {
  display: block;
}
</style>