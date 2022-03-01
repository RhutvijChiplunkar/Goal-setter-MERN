import axios from 'axios'

const API_URL='/api/users/'

//Register a user
const register=async(userData)=>{
    const respose=await axios.post(API_URL,userData)

    if(respose.data){
        localStorage.setItem('user',JSON.stringify(respose.data))
    }

    return respose.data
}

//Login a user
const login=async(userData)=>{
    const respose=await axios.post(API_URL+'login',userData)

    if(respose.data){
        localStorage.setItem('user',JSON.stringify(respose.data))
    }

    return respose.data
}

//logout a user
const logout=()=>{
    localStorage.removeItem('user')
}

const authService={
    register,
    logout,
    login
}
export default authService