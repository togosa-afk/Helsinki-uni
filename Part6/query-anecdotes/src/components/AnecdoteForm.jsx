import { useAnecdotes } from '../hook/useAnecdotes'
import { useNotify } from '../NotificationContext'

const AnecdoteForm = () => {
  const { addAnecdotes: addAnecdotesToServer } = useAnecdotes()
  const { notify } = useNotify()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value.trim()
    event.target.reset()

    if (!content) return

    addAnecdotesToServer(content)
    notify(`you created '${content}'`)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm