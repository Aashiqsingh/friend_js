function changeColor(){
    // console.log("hello");
    let color = document.getElementById("color")

    console.log(color.value);
    
    
    let mydiv = document.getElementById("mydiv")

    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    mydiv.style.backgroundColor = color.value
}