// PROYECTO E-COMMERCER DE VIDEOSJUEGOS
//CLASS CONTRUCTORA

class Game {
  constructor(id, nombre, genero, consola, precio,imagen){
      this.id = id,
      this.nombre = nombre,
      this.genero = genero,
      this.consola = consola,
      this.precio = precio,
      this.imagen = imagen
  }
  mostrarInfoGame (){
      console.log(`este juegos se llama ${this.nombre} su genero es ${this.genero} se encuentra disponible para la consola ${this.consola} a un precio de ${this.precio}`)
      
  }
}

//INSTANCIACION DE OBJETOS

const game1 = new Game (1,"God of War Ragnarok","accion y aventura","Playstation",20000,"god_ of_ war_ragnarok.jpg")
const game2 = new Game (2,"Uncharted 4","accion y aventura","Playstation",10000,"uncharted-4.jpg")
const game3 = new Game (3,"Spider-man","accion y aventura","Playstation",15000,"spider-man.jpg")
const game4 = new Game (4,"Gears of War 5 ","accion","Xbox",8000,"gears-of-war-5.jpg")
const game5 = new Game (5,"Halo Infinite","fps","Xbox",8500,"halo_infinite.jpg")
const game6 = new Game (6,"Forza Horizon 5","conduccion","Xbox",15000,"forzaHorizon5.jpg")


//ARRAY DE OBJETOS
const allGame = []
allGame.push(game1, game2, game3, game4, game5, game6)

const playGame = []
playGame.push(game1,game2,game3)

const xboxGame = []
xboxGame.push(game4,game5,game6)

//capturas DOM
let coincidencia = document.getElementById("coincidencia")
let buscador = document.getElementById("buscador")
let juegosDiv = document.getElementById("juegos")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")
let ocultarCatalogo = document.getElementById("ocultarCatalogo")
let juegoPlay= document.getElementById("juegosPlay")
let xboxjuegos = document.getElementById("juegosXbox")

//Funcion para mostrar catalogo

function mostrarCatalogo(array){
  juegosDiv.innerHTML = ``
  for(let juegos of array ){
     let nuevojuegoDiv = document.createElement("div")
     nuevojuegoDiv.className = "col-12 col-md-6 col-lg-4 my-2"
     nuevojuegoDiv.innerHTML = `<div id="${juegos.id}" class="card" style="width: 15rem;">
                                <img class="card-img-top img-fluid" style="height:400px width:600px"src="assets/${juegos.imagen}" alt="${juegos.titulo} de ${juegos.genero}">
                                <div class="card-body">
                                   <h6 class="card-title">${juegos.nombre}</h6>
                                   <h4 class="card-title">${juegos.consola}</h4>
                                     <p class="">Precio: $${juegos.precio}</p>
                                     <button id="agregarBtn${juegos.id}" class="btn btn-outline-primary">Agregar al carrito</button>
                                </div>
                             </div>`
     juegosDiv.appendChild(nuevojuegoDiv)
  
  let agregarBtn = document.getElementById(`agregarBtn${juegos.id}`)

  agregarBtn.addEventListener("click", () => {
     agregarAlCarrito(juegos)
  })
}
}

ocultarCatalogo.addEventListener("click",  () => {
  juegosDiv.innerHTML = ``
})



//buscador

function buscarJuego(buscado, array){

  let busqueda = array.filter(
     (dato) => dato.nombre.toLowerCase().includes(buscado.toLowerCase())  || dato.consola.toLowerCase().includes(buscado.toLowerCase()) 
  )
  busqueda.length == 0 ? 
  (coincidencia.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`,
  mostrarCatalogo(busqueda)) :
  (coincidencia.innerHTML = "", mostrarCatalogo(busqueda)) 

}

//carrito

let productosEnCarrito  
if(localStorage.getItem("carrito")){productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{productosEnCarrito = []
localStorage.setItem("carrito", productosEnCarrito)
}

 function agregarAlCarrito(game){
  let gameAgregado = productosEnCarrito.find((elem)=>elem.id == game.id) 
  if(gameAgregado == undefined){
     productosEnCarrito.push(game)
     localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
     console.log(productosEnCarrito)

     
     Swal.fire({
        title: `Ha agregado un producto al carrito`,
        text:`El juego ${game.nombre} de ${game.consola} ha sido agregado`,
        confirmButtonColor: "blue",
        confirmButtonText : "Gracias",
        imageUrl: `assets/${game.imagen}`,
        imageHeight: 200

     })
  }else{
 
     Swal.fire({
        title: `El juego ya existe en el carrito`,
        icon: "info",
        timer: 2000,
        showConfirmButton: false

     })
  }
}
function cargarProductosCarrito(array){
  modalBodyCarrito.innerHTML = ``
  array.forEach((productoCarrito)=>{
     modalBodyCarrito.innerHTML += `                                                                                     <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="width: 15rem;">
                <img class="card-img-top" style="height:400px width:600px" src="assets/${productoCarrito.imagen}" alt="">
                <div class="card-body">
                       <h4 class="card-title">${productoCarrito.nombre}</h4>
                       <p class="card-text">${productoCarrito.consola}</p>
                        <p class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
           </div>`
  })

  array.forEach((productoCarrito) => {
    document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
       console.log(`Eliminar producto`)
       let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
       cardProducto.remove()
       let productoEliminar = array.find((juego) => juego.id == productoCarrito.id)
       console.log(productoEliminar)
       let posicion = array.indexOf(productoEliminar)
       console.log(posicion)
       array.splice(posicion,1)
       console.log(array)
       localStorage.setItem("carrito", JSON.stringify(array))})

    
  
  })
  calcularTotal(array)}

  function calcularTotal(array){

    let total = array.reduce((acc, productoCarrito)=> acc + productoCarrito.precio , 0)
    total == 0 ? precioTotal.innerHTML= `No hay productos en el carrito` : precioTotal.innerHTML = `El total es $<strong>${total}</strong>`
 
 }


///eventos
buscador.addEventListener("input", () => { buscarJuego(buscador.value, allGame)
})

let verCatalogoPlay = document.getElementById("allCatalogo")
juegoPlay.addEventListener("click", ()=>{
   mostrarCatalogo(playGame)
})

let verCataXbox = document.getElementById("allCatalogo")
juegosXbox.addEventListener("click",()=> {mostrarCatalogo(xboxGame)})

let verCatalogo = document.getElementById("allCatalogo")
verCatalogo.addEventListener("click", ()=>{
   mostrarCatalogo(allGame)
})

 botonCarrito.addEventListener("click", () => {
  cargarProductosCarrito(productosEnCarrito)
})