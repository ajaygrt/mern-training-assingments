function accepted(num) {
   console.log("number valid");
}

function rejected(num) {
    console.log("number invalid");
}

const processUserInput = new Promise((resolve, reject) => {
    let num = 6;
    if (num > 5) {
        resolve(num);
    } else {
        reject(num);
    }
})

processUserInput
.then((num) => accepted(num)).catch((num) => console.log("error is " + num));