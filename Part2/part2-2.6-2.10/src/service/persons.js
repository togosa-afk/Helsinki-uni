import axios from 'axios'

const baseURL = '/api/persons'

const getAll = () => {
    const requests = axios.get(baseURL)
    return requests.then(response => response.data)
}

const create = (Object) => {
    const requests = axios.post(baseURL , Object)
    return requests.then(response => response.data)
}

const updateURL = (id , Object) => {
    const requests = axios.put(`${baseURL}/${id}` , Object)
    return requests.then(response => response.data)
}

const deleteURL = (id) => {
    const requests = axios.delete(`${baseURL}/${id}`)
    return requests.then(response => response.data)
}

export default { getAll, create, updateURL , deleteURL }