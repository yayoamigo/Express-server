const express = require('express')
const friendsController = require('./controllers/friends.controller')
const messageControler = require('./controllers/massages.controller')

const app = express();

const PORT = 3000;

//middlewares
app.use((req,res,next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json());
//routes
app.post('/friends', )

app.get('/friends', )

app.get('/friends/:friendId',)

app.get('/messages',messageControler.getMessages )

app.post('/messages', messageControler.postMessages )

app.listen(PORT, () => {
    console.log(`listenig on port ${PORT}`);
})