import AddAnecdote from './components/AddAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useAnecdoteActions } from './store'
import { useEffect } from 'react'

const App = () => {
  const { initialize } = useAnecdoteActions()
  
  useEffect(() => {
    initialize()
  }, [initialize])
  return (
    <div>
     
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AddAnecdote />
    </div>
  )
}

export default App