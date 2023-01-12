const express = require('express')

const app = express();

const PORT = 3000;

const friends = [
    {id: 0,
    name: 'jhon'},
    {
        id: 1,
    name: 'david'
    }
]


app.get('/friends', (req,res) => {
    res.json(friends)
})

app.get('/friends/:friendId', (req,res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend){
        res.json(friend)
    } else {
        res.status(404).json({
            error:'friend does not exist, sorry'
        })
    }
})

app.post('/messages', (req,res) => {
    console.log('Now post it')
})

app.listen(PORT, () => {
    console.log(`listenig on port ${PORT}`);
})