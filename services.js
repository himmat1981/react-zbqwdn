import {addPost, fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions';

export function fetchProducts(name) {
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

export function addUser(title,body) {
    return dispatch => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
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
              console.log(res)
              setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(addPost("Record has been added successfully"));
      }, 1000);
              
              return res;
    })
}
   
}
