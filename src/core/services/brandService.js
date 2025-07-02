import api from './api';

export async function getBrands() {
    const response = await api.get(`/brands`);
    return response.data;
}

export async function getBrandById(brandId) {
    const response = await api.get(`/brands/${brandId}`);
    return response.data;
}