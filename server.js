const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'c5b1d692dff142f79465b5fea92b5d76',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.listen(4000, () => {
    console.log('Server up and running on 4000')
})
