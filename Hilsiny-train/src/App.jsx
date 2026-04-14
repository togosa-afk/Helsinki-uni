import { useState } from "react"
import Note from "./components/Note.jsx"

function App(props) {

  const [notes, setNotes] = useState(props.notes)
  // const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("New note ...")
  const [showAll, setShowAll] = useState(true)

  // function has event as it's attr
  const addEvent = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    setNotes(notes.concat(noteObj))
    setNewNote('')
    console.log(`Boutton clicked ${event.target} `)
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
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addEvent}>
        <input value={newNote} onChange={handelNoteChange} />
        <button type="submit">save</button>
      </form>

    </>
  )
}

export default App