import axios from 'axios';

export default(positionData) => {
    console.log(positionData)
    const createUserUrl = `${window.apiHost}/employers/create-position`
    const axiosResp = axios.post(createUserUrl,positionData)
    return {
        type: 'createPosition',
        payload: {
            axiosResp
        }
    }
}