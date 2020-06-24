const assistantRoutes = require('express').Router()
const assistantController = require('../controllers/assistantController')

assistantRoutes.post('/', async function (req, res, next) {
    try {
        let result = await assistantController.sendInputMessageToAssistant(req.body).catch(err => { throw new Error(err) })
        result.response.result.session_id = result.session_id;
        res.status(200).send(result.response.result);
    }
    catch (err) {
        next(err.message)
    }
})

module.exports = assistantRoutes
