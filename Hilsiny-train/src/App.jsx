import { useState , useEffect } from "react"
import axios from 'axios'
import Note from "./components/Note.jsx"
import noteService from './services/notes.js'


function App() {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("New note ...")
  const [showAll, setShowAll] = useState(true)

  // get finction 
  const hook = () => {
    console.log('hook')
      noteService.getAll().then(initialNotes => {
        setNotes(initialNotes)
      })
    }
  useEffect(hook,[])

  //put function 
  const toggleImportance = (id) => {
    console.log(`importance of ${id} need to be toggeld`)
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important:!note.important}

    noteService.updateURL(id,changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id === id ? returnedNote : note))
    })
  }

  // post function
  const addNote = (event) => {
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    noteService.create(noteObj).then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const handelNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true )



  return (
    <>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />
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