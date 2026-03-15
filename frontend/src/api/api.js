import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const HomePage = async()=> axios.get(`${BASE_URL}/`)

export const registerUser = async(userdata)=> axios.post(`${BASE_URL}/auth/register`,userdata)
export const loginUser = async(userdata)=> axios.post(`${BASE_URL}/auth/login`,userdata)

export const addProject = async(projectData)=> axios.post(`${BASE_URL}/interns/add-portfolio`,projectData,{
    headers:{
        "Content-Type":"multipart/form-data"
    }
})

export const getProjects = async()=> axios.get(`${BASE_URL}/interns/projects`)