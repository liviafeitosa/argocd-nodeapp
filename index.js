const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({message: "Hello World!"})
})

app.listen(8080, () => {
    console.log("Hello World! final")
})