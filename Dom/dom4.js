// var a = 0;

var colors = ["green","red","blue","orange","yellow","orangered","aqua","black"]


function changeColor(){

    let mydiv = document.getElementById("mydiv")

    let randomIndex = Math.floor(Math.random() * colors.length)

    console.log(randomIndex);

    mydiv.style.backgroundColor = colors[randomIndex]
    


    // console.log("hello");
    // console.log(a++);
    
    

}