import axios from 'axios'

const baseURL = 'http://localhost:3001/notes'

const getAll = () => {
    const requests = axios.get(baseURL)
    return requests.then(response => response.data)
}

const create = (newObject) => {
    const requests = axios.post(baseURL , newObject)
    return requests.then(response => response.data)
}

const updateURL = (id , newObject) => {
    const requests = axios.put(`${baseURL}/${id}` , newObject)
    return requests.then(response => response.data)
}

export default { getAll, create, updateURL }