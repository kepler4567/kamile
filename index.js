const express = require('express')
const app = express()
const port = 3000

app.use('/fotos', express.static('k&k'))

app.get('/', (req, res) => {
  
    res.sendFile(__dirname + "/kamile.html")
})

app.get('/fotos', (req, res) => {
  
    res.sendFile(__dirname + "/Fotos.html")
})

app.listen(port, () => {
  console.log(`Servidor Rodando`)
})