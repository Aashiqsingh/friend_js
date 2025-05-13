const getOrder = ()=>{
    console.log("Food is going to be placed.....");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:121,
                message:"Order fetched successfully....",
                amount:499
            })
        },4000)
    })
}


const getPayment = (data)=>{
    console.log("Payment is going to be placed.....");

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                paymentId:data.orderId,
                message:"Payment fetched successfully....",
                amount:data.amount
            })
        }, 5000);
    })
}


getOrder().then((data)=>{
    console.log("food order data......",data);
    getPayment(data).then((res)=>{
        console.log("payment data......",res);
    }).catch((error)=>{
        console.log("payment error......",error);
    })
}).catch((err)=>{
    console.log("food order error......",err);
})