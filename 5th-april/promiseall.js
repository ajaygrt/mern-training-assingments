const resolved = new Promise((resolve, reject) =>{
    let message = "RESOLVED!";
    resolve(message)
})

const rejected = new Promise((resolve, reject) =>{
    let message = "REJECTED!";
    resolve(message);
})

Promise.all([rejected]).then((res)=>{
    console.log(res);
})