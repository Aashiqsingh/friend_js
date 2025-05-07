const submit = ()=>{
    let name = document.getElementById("name")
    let email = document.getElementById("email")


    console.log("name....",name.value);
    console.log("email....",email.value);


    localStorage.setItem("name",name.value)
    localStorage.setItem("email",email.value)
    
    

}


function getData(){

    let name = localStorage.getItem("name")
    let email = localStorage.getItem("email")

    let output = document.getElementById("output")

    output.innerText = name + " " + email

}

function clearData(){
    // localStorage.clear()
    localStorage.removeItem("name")
}