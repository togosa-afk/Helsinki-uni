import { useState, useEffect } from "react"
import Note from "./components/Note.jsx"
import noteService from './services/notes.js'
import Notification from "./components/Notification.jsx"
import './index.css'


function App() {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)


  // get finction 
  const hook = () => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes)
    })
  }
  useEffect(hook, [])

  if (!notes) { 
    return null 
  }

  //put function 
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .updateURL(id, changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(()=> {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  // post function
  const addNote = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    noteService.create(noteObj).then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    }).then(() => {
      setSuccessMessage(
        `Note '${noteObj.content}' was added successfully`
      )
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }).catch(() => {
      setErrorMessage(
        `server not responce`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })

  }

  const handelNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

    const handelDelete = (id) => {
    const note = notes.find(n => n.id === id)

    if (window.confirm(`Delete ${note.content}?`)) {
      noteService.deleteURL(id).then(() => {setNotes(notes.filter(n => n.id !== id))})
      .then(() => {
      setSuccessMessage(
        `Note '${note.content}' was deleted successfully`
      )
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }).catch(() => {
      setErrorMessage(
        `server not responce`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    }
  }


  return (
    <>
      <h1>Notes</h1>
      <Notification message={errorMessage} type="error" />
      <Notification message={successMessage} type="success" />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} handelDelete={() =>handelDelete(note.id) } />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handelNoteChange} />
        <button type="submit">save</button>
      </form>

    </>
  )
}

export default App