//fetch trabalha com promises
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(responseStream => {
//     responseStream.json().then(data => {
//         console.log(data);
//     })
// });

//Async / Await cria e trabalha com promises de maneira mais simples e enxuta

const simpleFunc = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        response.json().then(data => {
            console.log(data);
        });
    });
}

simpleFunc();