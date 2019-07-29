/*globals require*/

const HttpRequest = require('./http.service');

// new HttpRequest('https://google.com').get().then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error);
// });


HttpRequest.all([
    new HttpRequest('https://google.com').get(),
    new HttpRequest('https://jsonplaceholder.typicode.com/users').get(),
    new HttpRequest('https://jsonplaceholder.typicode.com/posts').get()
]).then((results) => {

    results.forEach((result) => {
       console.log(result);
    });

}).catch((error) => {
    console.log(error);
});
