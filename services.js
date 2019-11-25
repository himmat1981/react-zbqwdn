import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions';

function fetchProducts(name) {
   console.log("my name is "+name)
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users',
        {
        method: 'get',
       }).then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;