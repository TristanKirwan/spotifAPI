const app = require('../src/app');

async function refreshToken(){
  app.spotifyApi.refreshAccessToken()
  .then(data => {
    app.spotifyApi.setAccessToken(data.body['access_token'])
  })
  .catch(err => {
    console.error('Could not refresh access token:', err)
    res.sendStatus(500)
  })
  return spotifyApi.getAccessToken()
}

module.exports.refreshToken = refreshToken