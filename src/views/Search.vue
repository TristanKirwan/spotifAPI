<template>
  <SearchHeaderSection />
</template>

<script>
import SearchHeaderSection from '@/sections/SearchHeaderSection';

export default {
  name: 'Search',
  components: {
    SearchHeaderSection
  },
  data() {
    return {
      results: null
    }
  },
  created() {
    const searchTerm = this.$route.query.searchTerm
    if(searchTerm) this.getNewResults(searchTerm)
  },
  watch : {
    $route(newValue, oldValue) {
      const oldQuery = oldValue.query.searchTerm;
      const newQuery = newValue.query.searchTerm;
      if(oldQuery !== newQuery) {
        this.getNewResults(newQuery)
      }
    }
  },
  methods: {
    setResultData(val){
      this.results = val
    },
    async getNewResults(term){
      const result = await fetch(`${process.env.VUE_APP_baseUrl}/search`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          searchTerm: term
        })
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        if(data.message === 'No Auth token provided.') {
          //TODO: Fix a redirect or whatever
          console.log('Caught no auth token!')
        }
        else if(data.message = 'Success'){
          this.setResultData(data.data)
        }
      })
      .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped lang='scss'>
button {
  display: block;
}
</style>