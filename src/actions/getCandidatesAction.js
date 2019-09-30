import axios from 'axios';

export default() => {
    const candidatesUrl = `${window.apiHost}/candidates/position-candidates`
    const axiosResp = axios.get(candidatesUrl)
    console.log(axiosResp)
    return {
        type: 'getCandidates',
        payload: {
            axiosResp
        }
    }
}