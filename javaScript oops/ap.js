// //Using Await instead of promise chaining
// function getData(dataId){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     })
// }
// // Async-await
// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
// }
// getAllData();


// promise chaining instead of callback hell

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async func 1");
//             resolve("Success");
//         },4000);
//     });
// }


// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async func 2");
//             resolve("Success");
//         },4000);
//     });
// }


// console.log("Fetching Data 1 .. ");
// asyncFunc1().then(()=>{
//     console.log("Data 1 is fetched");
//     console.log("Fetching Data 2 .. ");
//     asyncFunc2().then(()=>{
//         console.log("Data 2 is fetched");
//     });
// });


// callBack Hell

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log('Data is fetched');
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     console.log("getting data 2");
//     getData(2,()=>{
//         console.log("getting data 3");
//         getData(3,()=>{
//             console.log("getting data 4");
//             getData(4);
//         });
//     });
// });