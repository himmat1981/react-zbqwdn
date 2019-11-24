import * as actionTypes from './ActionTypes';


export function fetchProductsPending() {
    return {
        type: actionTypes.FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function fetchProductsError(error) {
    return {
        type: actionTypes.FETCH_PRODUCTS_ERROR,
        error: error
    }
}

