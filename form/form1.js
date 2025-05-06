function submitHandler(event){
    event.preventDefault()
    // alert("Form submitted...")

    let name = document.getElementById("name").value 
    console.log(name);

    let nameErr = document.getElementById("nameErr")

    if(name.length <= 0)
    {
        nameErr.innerHTML = "Name is required.."
        nameErr.style.color = "red"
    }
    else if(name.length < 4)
    {
        // alert("Name is too short")
        nameErr.innerHTML = "Name is too short";
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = name
        nameErr.style.color = "green"
    }
    



    console.log("form submitted..");

    
}