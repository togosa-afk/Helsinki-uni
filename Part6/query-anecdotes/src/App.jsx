import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useAnecdotes } from './hook/useAnecdotes'


const App = () => {
  const { anecdotes, isPending, isError, updateAnecdotes } = useAnecdotes()


  if (isPending) {
    return <div>Loading ...</div>
  }

  if (isError) {
    return <div> anecdotes service is not available deu to problem in server </div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => updateAnecdotes(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App