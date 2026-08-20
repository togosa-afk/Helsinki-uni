import { useAnecdoteActions } from "../store"


const AddAnecdote = () => {

    const { addAnecdote } = useAnecdoteActions()

    const add = async (e) =>{
        e.preventDefault()
        const content = e.target.anecdote.value
        await addAnecdote(content)
        e.target.reset()
    }

    return(
        <>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div>
                    <input name="anecdote" />
                </div>
                <button type="submit">create</button>
            </form>
        </>
    )
}

export default AddAnecdote