console.log("Starting app");

setTimeout(() => {
    console.log("Inside setTimeout")
}, 2000);

setTimeout(() => {
    console.log("Zero sec")
}, 0);

console.log("Finishing up");