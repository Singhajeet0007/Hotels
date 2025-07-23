const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const Person = require('./models/person')
const { model } = require('mongoose')


passport.use(new LocalStrategy(async (USERNAME, password, done) => {
  try {
    const user = await Person.findOne({ username: USERNAME })
    
    if (!user) {
      return done(null, false, { message: "User not found" })
    }
    const isPasswordMatched =await user.comparePassword(password)
    if (isPasswordMatched) {
      return done(null, user)
    } else {
      return done(null, false, { message: "Incorrect password" })
    }
  } catch (error) {
    return done(err)
  }
}))

module.exports = passport