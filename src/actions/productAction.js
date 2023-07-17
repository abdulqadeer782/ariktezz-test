import apiClient from "../helpers/apiClient";
import { openNotification } from "../helpers/openNotification";
import { GET_PRODUCTS } from "./actionTypes";

export const getProducts = () => dispatch => {
    apiClient('/products').then(res => dispatch(getProductsSuccess(res.data))).catch((err) => dispatch(openNotification('error', err)))
};

export const addProduct = (values) => dispatch => {
    apiClient.post('/products', values).then((res) => {
        openNotification('success', `Product ${values.name} has been created.`)
        dispatch(getProducts())
    }).catch(err => openNotification('error', 'Something went wrong!'))
};


export const updateProduct = (id, values) => dispatch => {
    apiClient.put(`/products/${id}`, values).then((res) => {
        openNotification('success', `Product ${values.name} has been deleted.`)
        dispatch(getProducts())
    }).catch((err) => {
        openNotification('error', 'Something went wrong!')
    })
};


export const deleteProduct = (id, name) => dispatch => {
    apiClient.delete(`/products/${id}`).then((res) => {
        openNotification('success', `Product ${name} has been deleted.`)
        dispatch(getProducts())
    }).catch((err) => {
        openNotification('error', 'Something went wrong!')
    })
};

const getProductsSuccess = (values) => {
    return {
        type: GET_PRODUCTS,
        payload: values,
    };
};