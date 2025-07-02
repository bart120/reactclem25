import api from './api';

export async function getBrandById(brandId) {
    const response = await api.get(`/brands/${brandId}`);
    return response.data;
}