
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// httpClient.then( Response => {
//    // console.log(Response);
//    Response.json().then( data => {
//       console.log(data);
//    });
// });

httpClient
      .then( response => response.json())
      .then( data => console.log(data));

console.log('Hola');