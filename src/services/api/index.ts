import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.9:8080/',
});

import {decode, encode} from 'base-64'

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

export { api };
