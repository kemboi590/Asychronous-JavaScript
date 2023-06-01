//DEFINING CALLBACKS
const Task1 = (callback) => {
    console.log('task 1 started')
    setTimeout(() => {
        console.log('completed first task')
        callback()
    }, 2000)

}
const Task2 = (callback) => {
    console.log('task 2 started')
    setTimeout(() => {
        console.log('comleted second task')
        callback()
    },4000)
}


const Task3 = (callback) => {
    console.log('task 3 started')
    setTimeout(() => {
        console.log('comleted Third task')
        callback()
    },7000)
}


const Task4 = (callback) => {
    console.log('task 4 started')
    setTimeout(() => {
        console.log('comleted Forth task')
        callback()
    },8000)
}

const Task5 = (callback) => {
    console.log('task 5 started')
    setTimeout(() => {
        console.log('comleted Fifth task')
        callback()
    },10000)
}


Task1(() => {
    Task2(() => {
        Task3(() => {
            Task4(() => {
                Task5(() => {
                    console.log('All tasks completed')
                })
            })
        })
    })
})




