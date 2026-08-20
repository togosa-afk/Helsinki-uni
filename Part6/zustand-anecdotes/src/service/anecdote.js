const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await fetch(baseURL)

    if(!response.ok){
        console.log('failed to fetch data from server')
    }

    return await response.json()
}

const create = async (content) => {
    const options = {
        method:'POST',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify({content, votes: 0})
    }

    const response = await fetch(baseURL,options)

    if(!response.ok){
        console.log('failed to fetch data from server')
    }

    return await response.json()
}

const update = async (id, anecdote) => {

    const options = {
        method:'PUT',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify(anecdote)
    }

    const response = await fetch(`${baseURL}/${id}`,options)
    return await response.json()
}

const remove = async (id) => {
        const options = {
        method:'DELETE',
    }

    const response = await fetch(`${baseURL}/${id}`,options)

    return await response.json()
}

export default { getAll, create, update, remove }