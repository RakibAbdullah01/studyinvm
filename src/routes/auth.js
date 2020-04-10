const Router = require("express").Router()
const userController = require('../controllers/userController')
const isLoggedOut = require('./../middlewares/isLoggedOut')
const isLoggedIn = require('./../middlewares/isLoggedIn')
const passport = require('passport')

Router.get('/', isLoggedIn, (req, res) => {
    res.render('index', { user: req.user })
})

Router.get('/login', isLoggedOut, (req, res) => {
    res.render('auth.login')
})

Router.get('/logout', (req, res) => {
    req.session.user = null
    req.flash('success_msg', 'You have successfully logged out')
    res.redirect('/')
})

Router.post('/login', userController.login)

Router.get('/register', isLoggedOut, (req, res) => {
    res.render('auth/register')
})

Router.get('/settings', isLoggedIn, (req, res) => {
    res.render('auth/settings')
})

// Router.post('/register', userController.register)

Router.post('/register', passport.authenticate('local', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

Router.get('/recover', (req, res) => {
    res.render('auth/forget')
})


//social login routes

//FACEBOOK
Router.get('/facebook', passport.authenticate('facebook'))
Router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

//GITHUB
Router.get('/github', passport.authenticate('github'))
Router.get('/github/callback', passport.authenticate('github', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

//TWITTER
Router.get('/twitter', passport.authenticate('twitter'))
Router.get('/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

module.exports = Router