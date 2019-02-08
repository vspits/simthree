
// // // // // IMPORTS // // // // //

require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const sessions = require('express-session')
const ctrl = require('./controller')

const app = express()
const { SERVER_PORT, DB_CONNECTION, SESSION_SECRET } = process.env

// // // // // MIDDLEWARE // // // // //

app.use(json())

massive(DB_CONNECTION).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is werkin vry hard`))
})

app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null
}))



// // // // // ENDPOINTS // // // // //

app.post(`/auth/register`, ctrl.register)
app.post(`/auth/login`, ctrl.login)
app.get(`/api/user`, ctrl.getUser)
app.post(`/auth/logout`, ctrl.logout)
app.get(`/api/posts/:userid`, ctrl.getPosts)