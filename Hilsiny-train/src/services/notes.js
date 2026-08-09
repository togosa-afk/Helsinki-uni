import axios from 'axios'
const baseURL = '/api/notes'
let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
    const config = {
        headers : { Authorization: token },
    }
    const requests = axios.get(baseURL, config)
    return requests.then(response => response.data)
}

const create = async (newObject) => {

    const config = {
        headers : { Authorization: token },
    }

    const response = await axios.post(baseURL, newObject, config)


    return response.data
}

const updateURL = (id , newObject) => {
    const config = {
        headers : { Authorization: token },
    }
    const url = `${baseURL}/${id}`
    console.log('Updating note:', url, newObject)
    const requests = axios.patch(url, newObject, config)
    return requests.then(response => response.data)
}

const deleteURL = (id) => {
    const config = {
        headers : { authorization: token },
    }
    const requests = axios.delete(`${baseURL}/${id}`, config)
    return requests.then(response => response.data)
}


export default { getAll, create, updateURL , deleteURL , setToken }