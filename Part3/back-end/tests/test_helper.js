const Note = require('../models/note')
const User = require('../models/user')

const initialNotes = [
  {
    content: 'HTML is easy',
    important: false,
  },
  {
    content: 'The most important operations of HTTP protocol are GET and POST',
    important: true,
  },
  {
    content: 'A proper dinosaur codes with Java',
    important: false,
  },
]

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon' })
  await note.save()
  await note.deleteOne()

  return note._id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  return notes.map(note => note.toJSON())
}


////////////////////////////
// user helper functions //
//////////////////////////

// const user = [
//   {
//     username: 'mluukkai',
//     _id: 123456,
//   },
//   {
//     username: 'hellas',
//     _id: 141414,
//   },
// ]


const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}



module.exports = {
  initialNotes, nonExistingId, notesInDb, usersInDb
}