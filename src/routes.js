const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

routes.get('/', (_req, res)=>res.render(views+'index'))
routes.get('/photos', (_req, res)=>res.render(views+'fotos'))
routes.get('/fale-conosco', (_req, res)=>res.render(views+'fale-conosco'))
routes.get('/multimidia', (_req, res)=>res.render(views+'multimidia'))
routes.get('/specs', (_req, res)=>res.render(views+'specs'))
routes.get('/google-glass', (_req, res)=>res.render(views+'google-glass'))

module.exports = routes