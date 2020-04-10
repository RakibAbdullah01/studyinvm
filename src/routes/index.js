const Router = require('express').Router();

Router.use(require('./pages'));

// Router.use('/articles', require('./articles'));
Router.use('/auth', require('./auth'));

Router.get('/', (req, res) => res.render('index'))
// Router.all('/', (req, res) => res.redirect('/'));
Router.all('*', (req, res) => {
  res.render('pages.404');
});

module.exports = Router;
