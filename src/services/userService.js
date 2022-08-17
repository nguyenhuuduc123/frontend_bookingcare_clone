import axios from '../axios';


const handleLogin = (email,password) => {
    return axios.post('/api/login',{email,password})
}
const getAllUser = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUser = (data) => {
    return axios.post('/api/create-new-user',data)
}
const deleleUserService =  (userId) => {
        return axios.delete('/api/delete-new-user',{
            data : { id : userId}
        })
}
export {handleLogin,getAllUser,createNewUser,deleleUserService} ;