const express = require('express')
const path = require('path');
const friendsRouter = require('./routers/friends.router');
const messagesRouter = require('./routers/messages.router');


const app = express();

const PORT = 3001;

//middlewares
app.use((req,res,next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use('/site', express.static(path.join(__dirname,'public')))

app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))
//routes

app.get('/', (req,res) => {
    res.render('index', {
        Title: 'page',
        Content: 'this is a page, duh'
    })
})

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)


app.listen(PORT, () => {
    console.log(`listenig on portr ${PORT}`);
})