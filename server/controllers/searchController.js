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

async function getAlbum(id, token){
  const result = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(data => {
    return data
  })
  .catch(async err => {
    console.log(err)
    // if(err.response.data.error.status === 401 && err.response.data.error.message === 'The access token expired'){
    //   console.log('The access Token expired, trying to refresh and search again...')
    //   const newToken = await appController.refreshToken;
    //   return getAlbum(id, newToken)
    // }
    console.error('Something went wrong during the Album search', err.response.data)
    return err.response.data
  })

  const responseData = await result
  let data = {}

  data['status'] = responseData.error?.status || 200
  data['message'] = responseData.error?.message || 'success'
  data['data'] = responseData.data || []

  return data
}

async function getArtistGeneral(id, token) {
  const result = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(data => {
    return data
  })
  .catch(async err => {
    console.log(err)
    // if(err.response.data.error.status === 401 && err.response.data.error.message === 'The access token expired'){
    //   console.log('The access Token expired, trying to refresh and search again...')
    //   const newToken = await appController.refreshToken;
    //   return getAlbum(id, newToken)
    // }
    console.error('Something went wrong during the Album search', err.response.data)
    return err.response.data
  })

  const responseData = await result
  let data = {}

  data['status'] = responseData.error?.status || 200
  data['message'] = responseData.error?.message || 'success'
  data['data'] = responseData.data || []

  return data
}

async function getArtistData(token, url){
  const result = await axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(data => {
    return data
  })
  .catch(err => {
    console.error(err.response.status, err.response.statusText)
    throw new Error (err.response.statusText)
  })

  const responseData = await result
  let data = {}

  data['status'] = responseData.error?.status || 200
  data['message'] = responseData.error?.message || 'success'
  data['data'] = responseData.data || []

  return data
}

async function getArtistInfo(id, token){

  const artistGeneralResult = await getArtistData(token, `https://api.spotify.com/v1/artists/${id}`)
  .catch(error => {
    throw new Error('Something went wrong retrieving the general data of an artist.', error)
  })
  const artistAlbums = await getArtistData(token, `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album`)
  .catch(error => {
    throw new Error('Something went wrong retrieving the albums of an artist.', error)
  })
  const artistRelatedArtists = await getArtistData(token, `https://api.spotify.com/v1/artists/${id}/related-artists`)
  .catch(error => {
    throw new Error('Something went wrong retrieving the related artists of an artist.', error)
  })
  const artistTopTracks = await getArtistData(token, `https://api.spotify.com/v1/artists/${id}/top-tracks?market=NL`)
  .catch(error => {
    throw new Error('Something went wrong retrieving the top tracks of an artist.', error)
  })

  const data = await Promise.all([artistGeneralResult, artistAlbums, artistRelatedArtists, artistTopTracks])
  .then(([generalInfo, albums, relatedArtists, artistTopTracks]) => {
    return {
      genres: generalInfo.data.genres,
      href: generalInfo.data.href,
      images: generalInfo.data.images,
      name: generalInfo.data.name,
      albums: albums.data.items,
      totalAlbums: albums.data.total,
      relatedArtists: relatedArtists.data.artists,
      topTracks: artistTopTracks.data.tracks
    }
  })

  return await data

}

module.exports.generalSearch = generalSearch
module.exports.getAlbum = getAlbum
module.exports.getArtistInfo = getArtistInfo