// import { useParams, useNavigate } from 'react-router-dom'




// const Note = ({ note, toggleImportance, deleteNote }) => {

//   const label = note.important ? 'make not important' : 'make important'
  
//   const navigate = useNavigate()

//   const handleDelete = () => {
//     if (window.confirm(`Delete note "${note.content}"?`)) {
//       deleteNote(note.id)
//       navigate('/notes')
//     }
//   }


//   return (
//     <li className="note">
//       <span>{note.content}</span>
//       <button onClick={toggleImportance}>{label}</button>
//       <button onClick={handleDelete}>delete</button>
//     </li>
//   )
// }


//! code with zustand

import { useNoteActions } from "../store"



const Note = ({ note }) => {

    const { toggleImportance } = useNoteActions()

  return(
    <>
      <li>
        {note.important ? <strong>{note.content}</strong> : note.content}
        <button onClick={() => toggleImportance(note.id)}>
          {note.important ? 'make not important' : 'make important'}
        </button>
      </li>
      
    </>
  )
}

export default Note
