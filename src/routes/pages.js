const Router = require('express').Router()

let features = [
    {
        sl: '01.',
        title: 'Registration',
        text: 'Click "Login" or "JOIN US NOW" to do registration first for being EDUPRCHINA agent',
        delay: '0.3s'
    },
    {
        sl: '02.',
        title: 'Choose',
        text: 'Choose to be EDUPRCHINA individual agent or EDUPRCHINA company agent',
        delay: '0.3s'
    },
    {
        sl: '03.',
        title: 'Fill & Upload',
        text: 'Fill the personal information and upload clear documents, then Click “Submit”',
        delay: '0.3s'
    },
    {
        sl: '04.',
        title: 'Evaluation',
        text: 'EDUPRCHINA customer service will check documents and give your feedback ASAP',
        delay: '0.3s'
    },
    {
        sl: '05.',
        title: 'If Failed',
        text: 'If you failed registration, EDUPRCHINA customer service will inform you by email and help you correct it.',
        delay: '0.3s'
    },
    {
        sl: '06.',
        title: 'Done',
        text: 'Welcome to be EDUPRCHINA agent and wish us a happy and long-term cooperation',
        delay: '0.3s'
    },
]


Router.get('/why-vietnam', (req, res) => res.render('pages.why-vietnam'))
Router.get('/living-in-vietnam', (req, res) => res.render('pages.living-in-vietnam'))
Router.get('/programs', (req, res) => res.render('pages.programs'))
Router.get('/scholarships', (req, res) => res.render('pages.scholarships'))
Router.get('/admission', (req, res) => res.render('pages.admission'))
Router.get('/contact', (req, res) => res.render('pages.contact'))

module.exports = Router
