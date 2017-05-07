var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("Args are not Numbers");
            }
        }, 1500);
    });
};

asyncAdd(2, 5).then((res) => {
    console.log(res);
    return asyncAdd(res, 3);
}).then((res) => {
    console.log("Muste de 10, and is: ", res);
}).catch((errorMessage) => {
    console.log(errorMessage)
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("I did it");
//         reject("Unable to fulfill Promise");
//     }, 2500)
// });

// somePromise.then((message) => {
//     console.log('Success:', message);
// }, (errorMessage) => {
//     console.log("Error: ", errorMessage);
// });