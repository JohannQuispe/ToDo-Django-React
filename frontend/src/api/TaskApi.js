import axios from 'axios'
export const getAllTasks = () => {
    const response_api = axios.get('http://localhost:8000/tasks/api/v1/tasks/')
    console.log(response_api)
    return response_api
}