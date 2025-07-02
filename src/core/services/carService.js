import api from './api';

// avec then
/*export function getCars(){
    return api.get('/cars').then(response => {
        return response.data.sort((a, b) => {
            return new Date(a.dateOfCirculation) - new Date(b.dateOfCirculation);
        });
    });
}*/

//avec async/await
export async function getCars(){
    const response = await api.get('/cars');
    return response.data.sort((a, b) => {
            return new Date(a.dateOfCirculation) - new Date(b.dateOfCirculation);
        });
}

export async function postCar(car) {
    const response = await api.post('/cars', car);
    return response.data;
}