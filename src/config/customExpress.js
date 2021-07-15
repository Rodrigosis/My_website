const express = require('express')
const consign = require('consign')

module.exports = () => {
    const app = express()
    app.use(express.static(__dirname))

    consign()
        .include('src/views.js')
        .into(app)

    return app
}
