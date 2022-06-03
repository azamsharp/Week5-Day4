
// CREATE A PROMISE 

let promise = new Promise(function(resolve, reject) {
    resolve(100)
    //reject()
})

promise.then(function(number) {
    console.log('Promise has been resolved' + number)
    return number + 10 
})
.then(function(result) {
    console.log('Promise')
    console.log(result)
})
.catch(function(error){
    console.log(error)
})

const GET_ALL_POSTS_URL = 'https://troubled-peaceful-hell.glitch.me/orders'


fetch(GET_ALL_POSTS_URL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        console.log(result)
    }).catch(function(error) {
        console.log(error)
    })
