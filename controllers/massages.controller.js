const path = require('path')

function getMessages(req,res){

    res.render('messages', {
        Title:'this is another page',
        Actitude: 'lazy',
    })
    
}

function postMessages(req,res){
    console.log('Now post it')
}

module.exports = {
    getMessages,
    postMessages,
}