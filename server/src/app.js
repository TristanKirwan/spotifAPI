const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')
require('dotenv').config({ path: `${__dirname}/.env` })

const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.post('/login', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.redirect_uri,
    clientId: process.env.client_id,
    clientSecret: process.env.client_secret
  })

  spotifyApi.authorizationCodeGrant(code)
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  })
  .catch(() => res.sendStatus(400))
})


app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});