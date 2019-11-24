import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => {
           console.log(res)
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;