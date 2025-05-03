var students = [
    {
        id:1,
        name:"rahul",
        age:19,
        email:"rahul@gmail.com",
        gender:"male",
        isActive:true
    },
    {
        id:2,
        name:"pallavi",
        age:22,
        email:"pallavi@gmail.com",
        gender:"female",
        isActive:true
    },
    {
        id:3,
        name:"roshan",
        age:23,
        email:"roshan@gmail.com",
        gender:"male",
        isActive:false
    },
    {
        id:4,
        name:"priya",
        age:24,
        email:"priya@gmail.com",
        gender:"female",
        isActive:true
    }
]


// console.log(students);

// for(let i=0;i<students.length;i++)
// {
//     console.log(students[i].name);
    
// }

// var x = students.filter((stu)=> stu.gender === "male")
// console.log(x);


var x = students.filter((stu)=> stu.age > 20)
console.log(x);
