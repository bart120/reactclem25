import api from './api';

export function getCars(){
    return api.get('/cars');

}