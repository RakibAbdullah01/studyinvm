const env = require('dotenv').config()
const express = require("express");
const app = express();
const { engine } = require("express-edge");
// const database = require("./config/db");
// const passport = require('passport');
const flash = require('connect-flash')
// const session = require('express-session')
const session = require('cookie-session')
const path = require('path')

app.use(engine)
app.set('views', path.join(__dirname + '/views'))
app.use(express.static(path.join(__dirname + '/public')))

app.use(express.json())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.use(passport.initialize())
// app.use(passport.session())
//passport
// require('./config/passportConfig')

// app.use(async (req, res, next) => {
//     app.locals.errors = req.flash('errors')

//     req.isAuthenticated = req.session.user ? true : false

//     if (req.isAuthenticated) {
//         console.log(req.session)
//         // const user = await User.findOne({
//         //     username: req.session.user.username
//         // })
//         req.user = req.session.user
//     }
//     app.locals.user = req.session.user

//     app.locals.success_msg = req.flash('success_msg')

//     next()
// })

app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

app.use(flash())
app.use(require("./routes"))

app.listen(process.env.PORT || 3000, () => {
  console.log("Your server is running on http://localhost:"+process.env.PORT || 3000)
});
