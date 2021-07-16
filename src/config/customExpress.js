const express = require('express')
const consign = require('consign')

module.exports = () => {
    const app = express()

    consign()
        .include('src/views')
        .into(app)

    return app
}
