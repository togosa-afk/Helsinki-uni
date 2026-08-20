const baseURL = 'http://localhost:3001/anecdotes'

export const getALL = async () => { 
    const response = await fetch(baseURL)

    if(!response.ok){
        console.log('Failed to fetch notes')
    }

    return await response.json()
}

export const create = async ({ content, votes }) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ content, votes })
    }
    const response = await fetch(baseURL, options)

    if (!response.ok) {
        throw new Error('too short anecdote, must have length 5 or more')
    }

    return await response.json()
}

export const update = async (anecdote) => {
    const options = {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(anecdote)
    }

    const response = await fetch(`${baseURL}/${anecdote.id}`,options)

    if(!response.ok){
        console.log('Failed to fetch notes')
    }

    return await response.json()
}

