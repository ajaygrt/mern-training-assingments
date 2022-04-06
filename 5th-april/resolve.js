const logsec = new Promise ((resolve,reject) =>{
    let message = "HELLO!";
    setTimeout(()=>{
            resolve(message);
    },1000);setTimeout
})

Promise.all([logsec]).then((res)=>{
    console.log(res);
})