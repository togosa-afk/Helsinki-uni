const bcrypt = require('bcrypt')  // convert password from plain text to hash
const usersRouter = require('express').Router() // creat rout
const User = require('../models/user') // import user module and schema


//get
usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({}).populate('notes', { content: 1, important: 1 })

  response.json(users)
})


//post
usersRouter.post('/', async (request, response) => {
  const { username,  password, name } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)

  console.log(response.body)
})

module.exports = usersRouter