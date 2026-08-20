// import { useState, useEffect, useRef } from 'react'
// import Note from './Note'
// import Notification from './Notification'
// import LoginForm from './LoginForm'
// import NoteForm from './NoteForm'
// import Togglable from './Togglable'
// import loginService from '../services/login'
// import noteService from '../services/notes'
// import { Link } from 'react-router-dom'
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

// const NoteList = ({ notes }) => {

//   const [showAll, setShowAll] = useState(true)
//   const [errorMessage, setErrorMessage] = useState(null)
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [user, setUser] = useState(null)

//   const noteFormRef = useRef()


//   useEffect(() => {
//     const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
//     if (loggedUserJSON) {
//       const user = JSON.parse(loggedUserJSON)
//       setUser(user)
//       noteService.setToken(user.token)
//     }
//   }, [])


//   const toggleImportanceOf = id => {
//     const note = notes.find(n => n.id === id)
//     const changedNote = { ...note, important: !note.important }

//     noteService
//       .update(id, changedNote)
//       .then(returnedNote => {
//         //setNotes(notes.map(note => (note.id !== id ? note : returnedNote)))
//       })
//       .catch(() => {
//         setErrorMessage(
//           `Note '${note.content}' was already removed from server`
//         )
//         setTimeout(() => {
//           setErrorMessage(null)
//         }, 5000)
//         //setNotes(notes.filter(n => n.id !== id))
//       })
//   }


//   const handleLogin = async event => {
//     event.preventDefault()

//     try {
//       const user = await loginService.login({ username, password })

//       window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
//       noteService.setToken(user.token)
//       setUser(user)
//       setUsername('')
//       setPassword('')
//     } catch {
//       setErrorMessage('wrong credentials')
//       setTimeout(() => {
//         setErrorMessage(null)
//       }, 5000)
//     }
//   }

//   const notesToShow = showAll ? notes : notes.filter(note => note.important)

//   const loginForm = () => (
//     <Togglable buttonLabel="login">
//       <LoginForm
//         username={username}
//         password={password}
//         handleUsernameChange={({ target }) => setUsername(target.value)}
//         handlePasswordChange={({ target }) => setPassword(target.value)}
//         handleSubmit={handleLogin}
//       />
//     </Togglable>
//   )

//   return (
//     <div>
//       <h2>Notes</h2>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>content</TableCell>
//               <TableCell>user</TableCell>
//               <TableCell>important</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {notes.map(note => (
//               <TableRow key={note.id}>
//                 <TableCell>
//                   <Link to={`/notes/${note.id}`}>
//                     {note.content}
//                   </Link>
//                 </TableCell>
//                 <TableCell>
//                   {note.user.name}
//                 </TableCell>
//                 <TableCell>
//                   {note.important ? 'yes': ''}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   )
// }




//! code with Zustand

import { useNotes, useFilter } from '../store'
import Note from './Note'



const NoteList = () => {
  const notes = useNotes()
  const filter = useFilter()

  const notesToShow = notes.filter(note => {
    if (filter === 'important') return note.important
    if (filter === 'nonimportant') return !note.important
    return true
  })
  return (
    <ul>
      {notesToShow.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  )
}

export default NoteList
