import { useNotes, useNoteActions } from './store'
import { useEffect } from 'react'

import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {
  const notes = useNotes()

  const { add } = useNoteActions()

  const { initialize } = useNoteActions()

  useEffect(() => {
    initialize()
  }, [initialize])


  const generateId = () => Number((Math.random() * 1000000).toFixed(0))


  const addNote = (e) => {
    e.preventDefault()
    const content = e.target.note.value
    add({ id: generateId(), content, important: false })
    e.target.reset()
  }

  return (
    <>
      <NoteForm />
      <VisibilityFilter />
      <NoteList />
    </>
  )
}


export default App