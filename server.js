const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => {
    console.log('Server up and running on 4000')
})
