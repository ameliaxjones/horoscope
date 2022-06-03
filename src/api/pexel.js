import axios from 'axios';
// axios is like fetch 
export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f917000010000012b5954e93a224b2cb15991035a2db94f'
    }
});