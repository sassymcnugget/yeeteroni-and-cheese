const db = require('../models')
const bcrypt = require('bcrypt')

//login logout register verify
const login = (req, res) => {
     console.log('login login login')
     console.log(req.user)
     console.log(req.session)
     res.json(req.user)
}

const logout = (req, res) => {
     if (!req.user) return res.json({
          message: 'No user to log out'
     })

     req.logout()
     return res.json({ message: 'logout successful' })
}

const register = (req, res) => {
     console.log('in register function')
     //check to see if neccesary info is there
     if (!(req.body.username && req.body.email && req.body.password)) {
          return res.json({
               message: 'Please enter a username, email, and password'
          })
     }
     //check to make sure the user doesn't already exist
     db.User.findOne({ email: req.body.email }, (err, foundUser) => {
          if (err) return res.json(err)
          //if user already exists
          if (foundUser) {
               return res.json({
                    message: 'Email already in use.'
               })
          }
          //if user doesn't already exist
          console.log('so far so good')
          console.log(req.body)
          //const newBody = {email: req.body.email, password: req.body.password, username: req.body.username}
          const newUser = new db.User(req.body)
          newUser.save((err, savedUser) => {
               console.log('in callback to save user')

               if (err) {
                    console.log(err)
                    return res.json(err)
               }
               console.log(savedUser)
               res.json(savedUser)
          })
     })
}

// const verify = (req, res) => {

// }

module.exports = {
     login,
     logout,
     register,
     // verify
}