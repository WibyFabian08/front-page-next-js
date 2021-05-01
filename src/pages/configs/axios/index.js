import axios from 'axios';

import errorHandler from './errorHanler';

const instance = axios.create({
    baseURL: URL,
});

instance.interceptors.response.use((response) => {
    response.data, errorHandler
});

export default instance;