import * as actionTypes from '../actions/ActionTypes';

const initialState = {
    pending: false,
    products: {},
    error: null
}

export function productsReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
         
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case actionTypes.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

