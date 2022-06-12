import axios from 'axios';

const BASE_URL = "https://fakestoreapi.com";

const GET_Products = async () => {
    return await axios.get(`${BASE_URL}/products`).then(response => response.data)
}

export {GET_Products}