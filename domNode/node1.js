const getData = ()=>{
    
    let mydiv = document.getElementById("mydiv")

    let h1 = document.createElement("h1")
    h1.innerHTML = "Pallavi ma'am"


    let link = document.createElement("a")
    link.innerHTML = "google";
    link.href = "https://google.com";
    link.style.textDecoration = "none"

    



    mydiv.appendChild(h1)
    mydiv.appendChild(link)
}