import { useState } from "react"
import Note from "./components/Note.jsx"

// const Note = ({note}) => {
//   return(
//     <>
//     <li>{note.content}</li>
//     </>
//   )
// } 

function App({notes}) {
  const result = notes.map(note => note.id)
  console.log(result)
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map (note => 
          <Note key={note.id}  note={note} />
        )}
      </ul>
    </>
  )
}

export default App