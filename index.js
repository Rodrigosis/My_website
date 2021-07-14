const express = require('express')

const app = express()

app.listen(3000, () => console.log('servidor rodando!'))

app.get('/', (req, res) => res.send('Servidor rodando fino do fino!'))
