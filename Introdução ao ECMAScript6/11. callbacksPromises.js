// //callbacks
// function doSomething(callback){
//     setTimeout(function(){
//         //did something
//         callback('First data');
//     }, 1000);
// }

// function doOtherThing(callback){
//     setTimeout(function(){
//         //did other thing
//         callback('Second data');
//     },1000);
// }

// function doAll(){
//     try{
//         doSomething(function(data){
//             var processedData = data.split('');
//             try{
//                 doOtherThing(function(data2){
//                     var processedData2 = data2.split('');
//                     try{
//                         setTimeout(function(){
//                             console.log(processedData, processedData2);
//                         },1000);
//                     }catch(error){
//                             //handle error
//                     }
//                 });
//             }catch(err){
//                 //handle error
//             }
//         });
//     }catch(err){
//         //handle error
//     }
// }

// doAll();

//promises
const doSomethingPromises = () =>
    new Promise((resolve,reject) => {
        setTimeout(function(){
            //did something
            resolve('First data');
        }, 1000);
})

const doOtherThingPromises = () =>
    new Promise((resolve,reject) => {
        setTimeout(function(){
            //did other thing
            resolve('Second data');
        },1000);
})
/**Promises possuem 3 status:
 * Pending
 * Fulfilled
 * Rejected
 */

console.log(doSomethingPromises);

//usando o then veremos a promise resolvida
// doSomethingPromises().then(data => {
//                     console.log(data.split(''));
//                     return doOtherThingPromises()
//                 })
//                 .then(data2 => console.log(data2.split('')));

//Através do Promise.all é possível tratar as promises em paralelo
Promise.all([doSomethingPromises(),doOtherThingPromises()])
        .then((data)=>{
            console.log(data[0].split(''));
            console.log(data[1].split(''));
        }).catch(err => {console.log(err)});

//Promise race retorna a promisse que for concluída primeiro
Promise.race([doSomethingPromises(),doOtherThingPromises()])
        .then((data)=>{
            console.log(data.split(''));
        }).catch(err => {console.log(err)});

        