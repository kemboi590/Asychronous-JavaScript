//WRITING A PROMISE
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});
promise1.then(value => {
    console.log(value); // Success!
});



//REJECT AND RESOLVE
const promise = new Promise((resolve, reject) => {
    let hasPassedTest = true
    if (hasPassedTest) {
        resolve()
    }
    else {
        reject()
    }
})

promise.then(() => {
    console.log('Congratulations!!, You have a laptop')
}).catch(() => {
    console.log('I am sory, you cant have the gift')
})