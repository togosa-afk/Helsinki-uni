import { useAnecdoteActions } from "../store"

const Filter = () => {
    const { filterAnecdotes } = useAnecdoteActions()

    const handleChange = (event) => {

        filterAnecdotes(event.target.value)
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input  onChange={handleChange} />
        </div>
    )
}

export default Filter