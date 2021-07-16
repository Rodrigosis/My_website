const express = require("express")

module.exports = app => {
    // app.use(express.static(process.cwd() + '/src/templates/'))
    app.set('views', process.cwd() + '/src/templates/')
    // app.set('view engine', 'ejs')

    app.get('/', (req, res) => res.render('index'))
    app.get('/about', (req, res) => res.render('template'))
    app.get('/projects', (req, res) => res.render('projects'))

    // app.get('/', (red, res) => res.send('Servidor rodando fino do fino!'))
    // app.post('/', (red, res) => res.send('Servidor rodando fino do fino!!!'))
}
