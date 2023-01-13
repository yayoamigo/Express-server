const path = require('path')

function getMessages(req,res){

    res.sendFile(path.join(__dirname, '..', 'public', 'yayo.jpg'))
    
}

function postMessages(req,res){
    console.log('Now post it')
}

module.exports = {
    getMessages,
    postMessages,
}