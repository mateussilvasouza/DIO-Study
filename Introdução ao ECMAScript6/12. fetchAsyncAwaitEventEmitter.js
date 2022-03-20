
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(responseStream => {
    responseStream.json().then(data => {
        console.log(data);
    })
});