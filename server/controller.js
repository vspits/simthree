const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res, next) => {
        
        const {username, password} = req.body
        const {session} = req
        const db = req.app.get('db')

        const hash = bcrypt.hashSync(password, 10)

        let newUser = await db.user.registerUser({user: username, pass: hash})
        newUser = newUser[0]
        
        session.user = {...newUser}

        res.status(201).send(session.user)

    },

    login: async (req, res, next) => {
        
        const {username, password} = req.body
        const {session} = req

        const db = req.app.get('db')
        let user = await db.user.login({user: username})
        user = user[0]

        if(!user){
            return res.sendStatus(400)
        }

        const foundUser = bcrypt.compareSync(password, user.password)

        if(foundUser){
            delete user.password
            session.user = user
            res.status(200).send(session.user)
        } else {
            res.status(401).send('ACCESS DENIED')
        }

    },
    logout: (req, res, next) => {

        req.session.destroy()
        res.sendStatus(200)

    },
    getUser: (req, res, next) => {

        const { user } = req.session
        if(user){
            res.status(200).send(user)
        } else {
            res.sendStatus(401)
        }
        
    }
}