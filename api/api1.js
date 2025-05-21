const getData = async()=>{

    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
    })

    // console.log(response);
    const res = await response.json();
    console.log(res.data);



    let tbody = document.getElementById("tbody");
    res.data.forEach((data)=>{
        let tr  = document.createElement("tr");
        let idtd = document.createElement("td");
        let nametd = document.createElement("td");
        let emailtd = document.createElement("td");
        let agetd = document.createElement("td");
        let statustd = document.createElement("td");
        let deletetd = document.createElement("td");
        let deleteBtn = document.createElement("button");


        idtd.innerText = data._id;
        nametd.innerText = data.name;
        emailtd.innerText = data.email;
        agetd.innerText = data.age;
        statustd.innerText = data.isActive;
        deleteBtn.innerHTML = "DELETE";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.addEventListener("click",async()=>{
            // alert(data._id)
            const deleteData = await fetch("https://node5.onrender.com/user/user/"+data._id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log(deleteData);
            tr.remove();
        })

        tr.appendChild(idtd);
        tr.appendChild(nametd);
        tr.appendChild(emailtd);
        tr.appendChild(agetd);
        tr.appendChild(statustd);
        tr.appendChild(deletetd);
        deletetd.appendChild(deleteBtn)
        tbody.appendChild(tr);
    })
}