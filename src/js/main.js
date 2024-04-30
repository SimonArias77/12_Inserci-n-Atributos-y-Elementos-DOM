// const main =document.getElementsByTagName("main") 
// //const main = document.querySelector("main") // mismo resultado que getelementsbyname


// const can = document.createElement("img")



// main[0].appendChild(can) //para agregar un elemento al main, en este caso can

// can.id = "perro"
// can.src ="./public/img/kangal.webp" 
// can.alt = "imagen perrito"
// can.width = "250"
// can.height ="250"

//can.setAttribute("src","link de la imagen") otra manera, de forma manual

// const card = document.querySelector(".card")

// console.log(card);
// card.classList.remove("border")
// card.classList.remove("border-5")
// card.classList.remove("border-primary")
// card.classList.remove("rounden-5")
// card.classList.add("text-center")

const main =document.querySelector("main")
for (let i = 0; i < 70; i++) {
    main.innerHTML += `<div class="card text-center" style="width: 18rem;">
    <img src="./public/img/pastor_aleman_pelo_largo.jpg" width="250" height="250">
    <div class="card-body">
        <h2>Aròn</h2>
        <p>
            <strong> edad:</strong> <span> 3 años</span>
            <strong>raza:</strong> <span> pastor aleman</span>
        </p>
        <button class="btn btn-primary" type=" button">Ver detalles</button>

    </div>
</div>
`
    
}