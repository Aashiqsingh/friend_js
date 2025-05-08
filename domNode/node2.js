var students = [
    {
        id: 1,
        name: "pallavi",
        age: 24,
        email: "pallavi@gmail.com",
        gender: "female",
        img:"https://aniportalimages.s3.amazonaws.com/media/details/HGFHJUGJU.jpg"
    },
    {
        id: 2,
        name: "meet",
        age: 27,
        email: "meet@gmail.com",
        gender: "male",
        img:"https://aniportalimages.s3.amazonaws.com/media/details/HGFHJUGJU.jpg"
    },
    {
        id: 3,
        name: "priya",
        age: 23,
        email: "priya@gmail.com",
        gender: "female",
        img:"https://aniportalimages.s3.amazonaws.com/media/details/HGFHJUGJU.jpg"
    },
    {
        id: 4,
        name: "dugri",
        age: 20,
        email: "dugri@gmail.com",
        gender: "male",
        img:"https://aniportalimages.s3.amazonaws.com/media/details/HGFHJUGJU.jpg"

    }
]

let thead = document.getElementById("thead")
thead.style.display = "none"

const getData = () => {
    thead.style.display = ""
    let tbody = document.getElementById("tbody")

    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let genderTd = document.createElement("td")
        let imageTd = document.createElement("td")
        let img = document.createElement("img")


        idTd.innerHTML = students[i].id
        nameTd.innerHTML = students[i].name
        ageTd.innerHTML = students[i].age
        emailTd.innerHTML = students[i].email
        genderTd.innerHTML = students[i].gender
        img.src = students[i].img;
        img.style.height = "100px"
        img.style.width = "100px"




        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTd)
        tr.appendChild(emailTd)
        tr.appendChild(genderTd)
        tr.appendChild(imageTd)
        imageTd.appendChild(img)
    }
}