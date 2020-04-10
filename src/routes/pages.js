const Router = require('express').Router()

Router.get('/why-vietnam', (req, res) => res.render('pages.why-vietnam'))
Router.get('/living-in-vietnam', (req, res) => res.render('pages.living-in-vietnam'))
Router.get('/study', (req, res) => res.render('pages.study'))
Router.get('/programs', (req, res) => res.render('pages.programs'))
Router.get('/universities', (req, res) => res.render('pages.universities'))
Router.get('/scholarships', (req, res) => res.render('pages.scholarships'))
Router.get('/admission', (req, res) => res.render('pages.admission'))
Router.get('/contact', (req, res) => res.render('pages.contact'))

module.exports = Router
