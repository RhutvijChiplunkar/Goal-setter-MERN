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

const authService={
    register
}
export default authService