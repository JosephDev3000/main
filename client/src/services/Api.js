import axios from 'axios'

export default ()=> {
    return axios.create({
        // point to backend url
        baseURL: 'http://localhost:5000/api'
    })
}