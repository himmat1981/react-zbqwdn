import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions';

function fetchProducts(name) {
   console.log("my name is "+name)
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts',
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

export function addUser(title,body) {
   fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: title,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(AddPost("Record has been added successfully"));
            return res;
  })
}
