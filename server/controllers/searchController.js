const axios = require('axios')
const appController = require('./appController')

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
  .catch(async err => {
    if(err.response.data.error.status === 401 && err.response.data.error.message === 'The access token expired'){
      console.log('The access Token expired, trying to refresh and search again...')
      const newToken = await appController.refreshToken;
      return generalSearch(term, newToken)
    }
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