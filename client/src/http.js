import axios from 'axios'; 

const http = axios.create({ 
    baseURL: 'http://localhost:2022'
})

export default http; 