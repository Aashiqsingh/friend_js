var users = ["raghav", "suresha", "ramesh", "mahesh", "rajesh", "naincy", "rama", "seeta"];


// const deleteUser = (userName)=>{

//     var x = users.filter((user)=>{
//         return user != userName
//     })


//     return x;

// }

// var x = deleteUser("rajesh")
// console.log(x);

// const deleteUser = (userName)=>{

//     return users.filter((user)=>{
//         return user != userName
//     })
// }

// var x = deleteUser("naincy")
// console.log(x);


// const deleteUser = (userName)=>{

//     return users.filter((user)=> user != userName)
// }

// var x = deleteUser("naincy")
// console.log(x);



const deleteUser = (userName)=> users.filter((user)=> user != userName)


var x = deleteUser("rama")
console.log(x);