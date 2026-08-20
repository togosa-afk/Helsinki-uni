import { useAnecdotes,useAnecdoteActions, useFilter } from '../store'

const AnecdoteList = () => {
        const anecdotes = useAnecdotes()

        const { addVote, removeAnecdote } = useAnecdoteActions()
        const filter = useFilter()
        const filteredAnecdotes = anecdotes.filter((anecdote) =>
            anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )

        const sortedAnecdote = filteredAnecdotes.toSorted((a,b) => b.votes - a.votes)

    return(
        <>           
            {sortedAnecdote.map(anecdote => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => addVote(anecdote.id)}>vote</button>
                    </div>

                    {anecdote.votes === 0 && (
                        <button onClick={() => removeAnecdote(anecdote.id)} style={{ marginLeft: 5 }}>
                            delete
                        </button>
                    )}
                </div>
            ))}
        </>
    )
}

export default AnecdoteList