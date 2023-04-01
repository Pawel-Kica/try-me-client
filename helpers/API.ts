import axios from 'axios';
import config from './config';

const API = axios.create({
    baseURL: config.API_ADDRESS,
});

export default API;
