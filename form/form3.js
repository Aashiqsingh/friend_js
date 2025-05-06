const submitData = ()=>{
    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let gender = document.getElementsByName("gender")

    let output = document.getElementById("output")


    let gen = ""
    if(gender[0].checked == true){
        gen = "male"
    }
    else if(gender[1].checked){
        gen = "female"
    }
    else{
        gen = "other"
    }


    if(gen == "male")
    {
        if(age.value > 18)
        {
            output.innerHTML = "You are eligible for vote"
        }
        else{
            output.innerHTML = "You are not eligible for vote"
        }
    }
    else if(gen == "female"){
        if(age.value > 21)
        {
            output.innerHTML = "You are eligible for vote"
        }
        else{
            output.innerHTML = "You are not eligible for vote"
        }
    }
    else{
        if(age.value > 25)
        {
            output.innerHTML = "You are eligible for vote"
        }
        else{
            output.innerHTML = "You are not eligible for vote"
        }
    }





    console.log("name ==",name.value);
    console.log("age =",age.value);
    console.log("gender = ",gen);
    
    
    
}