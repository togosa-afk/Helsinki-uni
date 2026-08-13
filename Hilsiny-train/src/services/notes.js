import axios from 'axios'
const baseURL = '/api/notes'
let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
    const config = {
        headers : { Authorization: token },
    }
    const requests = await axios.get(baseURL, config)
    return requests.data
}

const create = async (newObject) => {

    const config = {
        headers : { Authorization: token },
    }

    const response = await axios.post(baseURL, newObject, config)


    return response.data
}

const update = async (id , newObject) => {
    const config = {
        headers : { Authorization: token },
    }
    const url = `${baseURL}/${id}`
    console.log('Updating note:', url, newObject)
    const requests = await axios.put(url, newObject, config)
    return requests.then(response => response.data)
}

const deleteNote = async (id) => {
    const config = {
        headers : { authorization: token },
    }
    const requests = await axios.delete(`${baseURL}/${id}`, config)
    return requests.then(response => response.data)
}


export default { getAll, create, update , deleteNote , setToken }