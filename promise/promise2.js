const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({message:"Data fetched successfully....",status:200});
        },4000)
    })


}


getData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})


// var ans = getData()
// // console.log(ans);
// ans.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
