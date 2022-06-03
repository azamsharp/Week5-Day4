// emailTextBox
// coffeeTypeTextBox
// placeOrderButton 

const emailTextBox = document.getElementById('emailTextBox')
const coffeeTypeTextBox = document.getElementById('coffeeTypeTextBox')
const placeOrderButton = document.getElementById('placeOrderButton')
const ordersUL = document.getElementById('ordersUL')

placeOrderButton.addEventListener("click", function() {

    // place an order 
    /*
    let request = new XMLHttpRequest() 
    request.open('POST','https://troubled-peaceful-hell.glitch.me/orders')
    request.setRequestHeader('Content-Type', 'application/json')

    const body = {
        email: emailTextBox.value, 
        type: coffeeTypeTextBox.value, 
        size: 'Small', 
        price: 3.50
    }

    // converts the object into string 
    // because over HTTP only primitive types (string, int, float, boolean)
    request.send(JSON.stringify(body))
    */

    // USING FETCH LIB 

    const body = {
        email: emailTextBox.value, 
        type: coffeeTypeTextBox.value, 
        size: 'Small', 
        price: 3.50
    }

    fetch('https://troubled-peaceful-hell.glitch.me/orders',{
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(body)
    }).then(function(response) {
        return response.json()
    }).then(function(result) {
        if(result.success) {
            // load all the orders 
            getAllOrders(displayOrders)
        } else {
            // update the ui and show result.message 
        }
    })


})





 function getAllOrders(displayOrdersCallback) {

    /*
     let request = new XMLHttpRequest()
     request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
     request.send()
     request.addEventListener('load', function(){
         let orders = JSON.parse(this.responseText)
         displayOrdersCallback(orders)
     }) */

     fetch('https://troubled-peaceful-hell.glitch.me/orders')
     .then(function(response) {
         return response.json()
     }).then(function(orders) {
         displayOrdersCallback(orders)
     })

 }

 function displayOrders(orders) {
     let orderItems = orders.map(function(order) {
         return `<li>${order.email}</li>`
     })

     ordersUL.innerHTML = orderItems.join('')
 }


// /*
// getAllOrders(function(orders) {
//     displayOrders(orders)
// }) */

getAllOrders(displayOrders)