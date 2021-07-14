module.exports = app => {
    app.get('/', (req, res) => res.send('Servidor rodando fino do fino!'))

    app.post('/', (red, res) => res.send('Servidor rodando fino do fino!!!'))
}
