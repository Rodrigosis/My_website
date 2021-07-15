module.exports = app => {
    app.get('/', (req, res) => res.sendFile(__dirname + '/templates/index.html'))

    // app.get('/', (red, res) => res.send('Servidor rodando fino do fino!'))
    // app.post('/', (red, res) => res.send('Servidor rodando fino do fino!!!'))
}
