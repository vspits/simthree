
// // // // // IMPORTS // // // // //

const express = require('express')
require('dotenv')
const {json} = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')

const app = express()
const { SERVER_PORT, DB_CONNECTION, SESSION_SECRET } = process.env

// // // // // MIDDLEWARE // // // // //

app.use(json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null
}))

massive(DB_CONNECTION).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is werkin vry hard`))
})


// // // // // ENDPOINTS // // // // //

app.get(`/api`, ctrl.function)
app.post(`/api`, ctrl.function)
app.put(`/api`, ctrl.function)
app.delete(`/api`, ctrl.function)
