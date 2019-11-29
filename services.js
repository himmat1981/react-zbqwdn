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
      fetch('https://ec2-15-206-124-5.ap-south-1.compute.amazonaws.com/jsonapi/node/article', {
      method: 'POST',
      body: JSON.stringify({
  "data": {
    "type": "node--article",
    "attributes": {
      "title": title,
      "body": {
        "value": body,
        "format": "plain_text"
      }
    }
  }
}),
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzODdhNmI5MmQyMjM4ZmU1ZWJkOWRlMTg3ZTM2MDdiY2YxM2Q2ZDc5OTU0NmU2ZDVmZjVhMGVhNjUxZDhlMTdhY2E4MDdlNmNjZDQ3NGI1In0.eyJhdWQiOiJjYjk4ZjcxNy1mYmFiLTRmNjYtYWFhZi1hZjVhNDdlN2RlOTYiLCJqdGkiOiJjMzg3YTZiOTJkMjIzOGZlNWViZDlkZTE4N2UzNjA3YmNmMTNkNmQ3OTk1NDZlNmQ1ZmY1YTBlYTY1MWQ4ZTE3YWNhODA3ZTZjY2Q0NzRiNSIsImlhdCI6MTU3NTAxMjg3MSwibmJmIjoxNTc1MDEyODcxLCJleHAiOjE1NzUwMTMxNzEsInN1YiI6IjEiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCJdfQ.bZUym2zKmjdvXacgU9LrMqEH2M3HpBUndi46oT9MmdrahkJBGzFB3wPiSRkH73bwbVA3o0B8U1p5iwA2QfzI7nErZlADZKxJynQ6je47f_XdMjViU7s1EXkUiTLQ7MGZx6eEDWoMmdiqTPCBBpu5BAg2zjVZEUYT8mQfQDt8RObfFGogN-OvInfvA0sVtnuzNtkGnHEEEQNDII96-Hlw7vixAkKXZOv-1uuytuvblk8zIo61TrrZp6QNtqTLwbRfUV1kCHaruojADBcYQuFNBoelcFSzc-D0e33lP-boiYS0YTp-163Upc2s0uDAhamGmmcrfEAwIQPjmnHNLKyinNHec6LrDET14cQdt-X21nY01BR8zGBczDjPmz5pInVyOYGVBrwpWP2cno5dbYqr-E9Gx5eHTILFddkDQQ3hnteN8TDuuJl4yyzTza680rpHSi2daALOP2i3XORSxOTUZw39w3Ip0UCUrFR1zaJOwqV-8ehjGbaCOYcjFBZUu2awpAV42HVJaBAaLrEfkEwgl3pbL7fvyyfwfg2xrAS6FdY65Q1HFCmw1CgY2z4399k0DTl7nBA0shRlfSEvs4JLKk1UPzW5Us5xEbbYtc_hSvhNSpq6oKGVxijQH3A9BvYxm1SawNbDa8Os_jcJoVWu3xmkKm26igZkhe8VJG3Kjo8",
        "Content-type": "application/vnd.api+json; charset=UTF-8",
        "Accept": "application/vnd.api+json; charset=UTF-8",

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
