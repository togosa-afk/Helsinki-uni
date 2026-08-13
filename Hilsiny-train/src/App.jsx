import { useState, useEffect } from 'react'
import noteService from './services/notes'
import { Container, AppBar, Toolbar, Button  } from '@mui/material'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import NoteList from './components/NoteList'
import Home from './components/Home'
import NoteForm from './components/NoteForm'
import styled from 'styled-components'


const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  const addNote = noteObject => {
    noteService.create(noteObject).then(returnedNote => {
      setNotes(notes.concat(returnedNote))
    })
  }

  const deleteNote = async (id) => {
    await noteService.remove(id)
    setNotes(notes.filter(n => n.id !== id))
  }

  const padding = {
    padding: 5
  }
  const style = { '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }

  return (
    
      <Router>
        <Page>
          <Navigation>
            <Button color="inherit" component={Link} sx={style} to="/">home</Button>
            <Button color="inherit" component={Link} sx={style} to="/notes">notes</Button>
            <Button color="inherit" component={Link} sx={style} to="/create">new note</Button>
          </Navigation>
          <Routes>
            <Route path="/notes" element={
              <NoteList notes={notes} deleteNote={deleteNote} />
            } />
            <Route path="/create" element={
              <NoteForm createNote={addNote}/>
            } />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer>
            Note app, Department of Computer Science, University of Helsinki 2026
          </Footer>
        </Page>
      </Router>
    
  )
}


const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`

const Footer = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`

export default App