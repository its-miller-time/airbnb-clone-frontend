import axios from 'axios';

export default(userData) => {

    const createUserUrl = `${window.apiHost}/candidates/create-user-profile`
    const axiosResp = axios.post(createUserUrl,userData)
    return {
        type: 'addUser',
        payload: {
            axiosResp
        }
    }
}