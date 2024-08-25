const num1: number = 2
console.log(num1)

type User = {
    name: String,
    age: number
    address?:String
} 


// const user : User={
//     name: 'Ali',
//     age:12
// }


// User after params is type what you want to return 

function getUser(userData:User) : User{
    return userData
}

console.log(getUser({name:'two', age:12}))