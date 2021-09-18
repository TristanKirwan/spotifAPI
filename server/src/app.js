const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')
require('dotenv').config({ path: `${__dirname}/.env` })

const searchController = require('../controllers/searchController');


const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

const spotifyApi = new SpotifyWebApi({
  redirectUri: process.env.redirect_uri,
  clientId: process.env.client_id,
  clientSecret: process.env.client_secret
})

app.post('/login', (req, res) => {
  const code = req.body.code
  spotifyApi.authorizationCodeGrant(code)
  .then(data => {
    spotifyApi.setAccessToken(data.body.access_token)
    spotifyApi.setRefreshToken(data.body.refresh_token)
    res.json({
      expiresIn: data.body.expires_in
    })
  })
  .catch(() => res.sendStatus(400))
})

app.post('/refresh', (req, res) => {
  spotifyApi.refreshAccessToken()
  .then(data => {
    console.log('Should be fine:', data)
    spotifyApi.setAccessToken(data.body['access_token'])
  })
  .catch(err => {
    console.error('Could not refresh access token:', err)
    res.sendStatus(500)
  })
})

app.post('/search', (req,res) => {
  const searchTerm = req.body.searchTerm || '';
  const token = spotifyApi._credentials.access_token

  if(token === undefined){
    console.log('hello?')
    res.status(500).json({
      message: 'No Auth token provided.'
    })
    return
  }

  // const result = await searchController.generalSearch(searchTerm, token)
  // console.log(result)
  // res.json({
  //   status: 'testing!'
  // })
})


app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});