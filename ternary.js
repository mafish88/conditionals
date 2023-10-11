let firstName = 'Michael'
// A basic ternary
console.log ((firstName) ? // If firstName is truthy
    firstName : // Console log firstName
    'who are you' // Otherwise ask 'who are you'
)

// Using a templated literal
console.log(`hello${
    (firstName) ? // If firstName is truthuy
', ' + firstName : // add their name

'' // otherwise, dont add anything
}`)


function showData(data){
    console.log((data) ? // If we have data
    data : // COnsole log the data
    'Loading...' // Otherwise console log loading 
    )
}


let ourData = undefined; // Our page loads
showData(ourData)

ourData = ['Apples', 'Oranges'] // Our page finishes loading the data
showData(ourData)
