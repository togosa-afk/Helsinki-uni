import axios from 'axios'

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'


const getAll = () => {
    const requests = axios.get(baseURL)
    return requests.then(response => response.data)
}

export default { getAll }
