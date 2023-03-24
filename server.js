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

const quote = []

app.get('/', (req, res) => {
    res.status(200).send(quote)
})

app.post('/api/quote', (req, res) => {
    let {michaelScottQuotes} = req.body
    const index = quote.findIndex(msQuote => {
        return msQuote === michaelScottQuotes
    })
    try {
        if (index === -1 && michaelScottQuotes !== '') {
            quote.push(michaelScottQuotes)

            res.status(200).send(quote)
        } else if (michaelScottQuotes === '') {

            res.status(400).send('You must enter a quote')
        } else {

            res.status(400).send('That quote already exists!')
        }
    } catch (err) {
        console.log(err)
    }
})

app.delete('/api/quote/:index', (req, res) => {
    const targetIndex = +req.params.index
    let deleteQuote = quote.splice(targetIndex, 1)

    res.status(200).send(quote)
})

app.listen(4000, () => {
    console.log('Server up and running on 4000')
})
