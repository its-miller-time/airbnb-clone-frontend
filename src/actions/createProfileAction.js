import axios from 'axios';

export default(userData) => {
console.log('createProfileAction called')
console.log(userData)
    const createUserUrl = `${window.apiHost}/candidates/create-user-profile`
    const axiosResp = axios.post(createUserUrl,userData)
    console.log(axiosResp)
    return {
        type: 'addUser',
        payload: {
            axiosResp
        }
    }
}