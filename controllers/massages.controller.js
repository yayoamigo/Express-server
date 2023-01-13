function getMessages(req,res){
    res.send('<ul><li>Hello man</li></ul>')
}

function postMessages(req,res){
    console.log('Now post it')
}

module.exports = {
    getMessages,
    postMessages,
}