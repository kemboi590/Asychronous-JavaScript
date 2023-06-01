//CREATING PROMISES
let Task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let taskSuccess = true
            if (taskSuccess) {
                resolve('Task 1 completed')
            } else {
                reject('Task 1 incomplete, Error occured')
            }
            
        },5000)
    })
}

let Task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let taskSuccess = true
            if (taskSuccess) {
                resolve('Task 2 completed')
            } else {
                reject('Task 2 incomplete, Error occured')
            }
            
        },3000)
    })
}



let Task3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let taskSuccess = true
            if (taskSuccess) {
                resolve('Task 3 completed')
            } else {
                reject('Task 3 incomplete, Error occured')
            }
            
        },1000)
    })
}

//NON-BLOCKING JS

Task1().then((result) => {
    console.log(result)
}).catch((Err) => {
    console.log(Err)
})

Task2().then((result) => {
    console.log(result)
}).catch((Err) => {
    console.log(Err)
})

Task3().then((result) => {
    console.log(result)
}).catch((Err) => {
    console.log(Err)
})

//BLOCKING PROMISE


/*
Task1()
    .then((result) => {
        console.log(result);
        return Task2(); // Chain Task2 after Task1 is completed
    })
    .then((result) => {
        console.log(result);
        return Task3(); 
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
    */