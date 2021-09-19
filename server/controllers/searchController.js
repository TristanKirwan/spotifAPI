const axios = require('axios')

async function generalSearch(term, token){
  let escapedTerm = term.replace(/\s/g, '%20')
  const result = await axios.get(`https://api.spotify.com/v1/search?q=${escapedTerm}&type=artist,album,playlist,track`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(data => {
    return data
  })
  .catch(err => {
    console.error('Something went wrong during the search', err.response.data)
    return err.response.data
  })

  const responseData = await result
  let data = {}

  data['status'] = responseData.error?.status || 200
  data['message'] = responseData.error?.message || 'success'
  data['data'] = responseData.data || []

  return data
}

module.exports.generalSearch = generalSearch