const express = require('express');
const messageControler = require('../controllers/massages.controller')

const messagesRouter = express.Router();

messagesRouter.get('/',messageControler.getMessages )
messagesRouter.post('/', messageControler.postMessages )

module.exports = messagesRouter;