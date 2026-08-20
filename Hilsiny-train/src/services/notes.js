// import axios from 'axios'
// const baseURL = '/api/notes'
// let token = null

// const setToken = newToken => {
//   token = `Bearer ${newToken}`
// }

// const getAll = async () => {
//     const config = {
//         headers : { Authorization: token },
//     }
//     const requests = await axios.get(baseURL, config)
//     return requests.data
// }

// const create = async (newObject) => {

//     const config = {
//         headers : { Authorization: token },
//     }

//     const response = await axios.post(baseURL, newObject, config)


//     return response.data
// }

// const update = async (id , newObject) => {
//     const config = {
//         headers : { Authorization: token },
//     }
//     const url = `${baseURL}/${id}`
//     console.log('Updating note:', url, newObject)
//     const requests = await axios.put(url, newObject, config)
//     return requests.then(response => response.data)
// }

// const deleteNote = async (id) => {
//     const config = {
//         headers : { authorization: token },
//     }
//     const requests = await axios.delete(`${baseURL}/${id}`, config)
//     return requests.then(response => response.data)
// }


// export default { getAll, create, update , deleteNote , setToken }

/// using (fetch API)

const baseURL = 'http://localhost:3001/notes'

// GET function

const getAll = async () => {
    const response = await fetch(baseURL)

    if(!response.ok){
        console.log('Failed to fetch notes')
    }

    return await response.json()
     
}

const create = async (content) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ content, important: false })
    }
    const response = await fetch(baseURL, options)

    if(!response.ok){
        console.log('Failed to fetch notes')
    }

    return await response.json()

}

const update = async (id, note) => {
    const options = {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(note)
    }

    const response = await fetch(`${baseURL}/${id}`,options)

    if(!response.ok){
        console.log('Failed to fetch notes')
    }

    return await response.json()
}

export default { getAll, create, update }