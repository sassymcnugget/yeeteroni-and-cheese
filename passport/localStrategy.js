const User = require('../models/user')

const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
     //set "username" (unique identifier) for passport
     {usernameField: 'email'},
     //function to verify user
     function(email, password, done) {
          User.findOne({email: email}, (err, foundUser) => {
               if (err) return done(err)
               if (!foundUser) return done(null, false, {message: 'Invalid credentials'})
               if (!foundUser.checkPassword(password)) return done(null, false, {message: 'Invalid credentials'})
               console.log('success')
               return done(null, foundUser)
          })
     }
)

module.exports = strategy