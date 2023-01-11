const express = require('express')

const app = express();

const PORT = 3000;

app.get('/', (req,res) => {
    res.send('hi from the server')
})

app.get('/messages', (req,res) => {
    req.send('now hi again')
})

app.post('/messages', (req,res) => {
    console.log('Now post it')
})

app.listen(PORT, () => {
    console.log(`listenig on port ${PORT}`)
})