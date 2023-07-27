// PROYECTO E-COMMERCER DE VIDEOSJUEGOS
//CLASS CONTRUCTORA

const DateTime = luxon.DateTime
let fecha = document.getElementById("fecha")
setInterval(()=>{
   let fechaMostrar =  DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)
   fecha.innerHTML = `<p>${fechaMostrar}</p>`

},1000)

class Game {
  constructor(id, nombre, genero, consola, precio,imagen){
      this.id = id,
      this.nombre = nombre,
      this.genero = genero,
      this.consola = consola,
      this.precio = precio,
      this.imagen = imagen
  }
}


const cargarJuegos = async () =>{
   const res = await fetch("juegos.json")
   const data = await res.json()
   
   for(let game of data){
       let gameData = new Game(game.id, game.nombre, game.genero, game.consola, game.precio, game.imagen)
       allGame.push(gameData)
       
   }
   localStorage.setItem("allGame", JSON.stringify(allGame))
}

let allGame = [] 
 
if(localStorage.getItem("allGame")){

    allGame = JSON.parse(localStorage.getItem("allGame"))
}else{
 
    cargarJuegos()
   
}

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
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")



//buscador

function buscarJuego(buscado, array){

  let busqueda = array.filter(
     (dato) => dato.nombre.toLowerCase().includes(buscado.toLowerCase())  || dato.consola.toLowerCase().includes(buscado.toLowerCase()) 
  )
  busqueda.length == 0 ? 
  (coincidencia.innerHTML = `<h3>No hay coincidencias con la búsqueda "${buscado}"</h3>`,
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
        confirmButtonText : "Ok",
        imageUrl: `assets/${game.imagen}`,
        imageHeight: 200,
        timer:3500

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
     modalBodyCarrito.innerHTML += `<div class="row justify-content-center">                                                                                                  <div class="card border mb-3" id ="productoCarrito${productoCarrito.id}" style= "width: 20rem">
                <img class="card-img-top img-fluid" style="height:400px width:600px" src="assets/${productoCarrito.imagen}" alt="">
                <div class="card-body">
                       <h4 class="card-title">${productoCarrito.nombre}</h4>
                       <p class="card-text">${productoCarrito.consola}</p>
                        <p class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
           </div> </div>`
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
       localStorage.setItem("carrito", JSON.stringify(array))
      calcularTotal(array)
      })
  })
  calcularTotal(array)}

  function calcularTotal(array){

    let total = array.reduce((acc, productoCarrito)=> acc + productoCarrito.precio , 0)
    total == 0 ? precioTotal.innerHTML= `No hay productos en el carrito` : precioTotal.innerHTML = `El total es $<strong>${total}</strong>`
    return total
 
 }


//Funcion para mostrar catalogo

function mostrarCatalogo(array, propiedadFiltro, valorFiltro) {
   juegosDiv.innerHTML = '';
 
   for (let juego of array) {
     if (juego[propiedadFiltro] === valorFiltro) {
       let nuevojuegoDiv = document.createElement('div')
       nuevojuegoDiv.className = "col-12 col-md-6 col-lg-4 my-2"
       nuevojuegoDiv.innerHTML = `
         <div id="${juego.id}" class="card" style="width: 15rem;">
           <img class="card-img-top img-fluid" style="height:400px width:600px;" src="assets/${juego.imagen}" alt="${juego.titulo} de ${juego.genero}">
           <div class="card-body">
             <h6 class="card-title">${juego.nombre}</h6>
             <h4 class="card-title">${juego.consola}</h4>
             <p class="">Precio: $${juego.precio}</p>
             <button id="agregarBtn${juego.id}" class="btn btn-outline-primary">Agregar al carrito</button>
           </div>
         </div>`;
 
       juegosDiv.appendChild(nuevojuegoDiv);
 
       let agregarBtn = document.getElementById(`agregarBtn${juego.id}`);
 
       agregarBtn.addEventListener('click', () => {
         agregarAlCarrito(juego);
       })
     }
   }
 }

// funcion finalizar compra

 function finalizarCompra(array){
   Swal.fire({
      title: '¿Está seguro de querer realizar la compra?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
  }).then((result) => {
      if(result.isConfirmed){
         let totalFinal = calcularTotal(array)
         Swal.fire({
            title: 'Compra realizada',
            icon: 'success',
            confirmButtonColor: 'green',
            text: `Muchas gracias por su compra. Debe abonar $${totalFinal} `,
            })

         productosEnCarrito = []
         localStorage.removeItem("carrito")
      }else{
         Swal.fire({
            title: 'Compra no realizada',
            icon: 'info',
            text: `La compra no ha sido realizada. Atención sus productos siguen en el carrito.`,
            confirmButtonColor: 'green',
            timer:3500
        })
      }
  } )
} 


botonFinalizarCompra.addEventListener("click", () =>{
   finalizarCompra(productosEnCarrito)
})



///eventos

mostrarCatalogo(allGame, "consola","Xbox");
let verCataXbox = document.getElementById("allCatalogo")
xboxjuegos.addEventListener("click",()=> {
   mostrarCatalogo(allGame,"consola","Xbox")})

 mostrarCatalogo(allGame, "consola", "PlayStation");
let verCatalogoPlay = document.getElementById("allCatalogo")
juegoPlay.addEventListener("click", ()=>{
   mostrarCatalogo(allGame,"consola","Playstation")})

 let verCatalogo = document.getElementById("allCatalogo")
verCatalogo.addEventListener("click", ()=>{
   mostrarCatalogo(allGame)})

ocultarCatalogo.addEventListener("click",  () => {
   juegosDiv.innerHTML = ``})

botonCarrito.addEventListener("click", () => {
  cargarProductosCarrito(productosEnCarrito)})

buscador.addEventListener("input", () => { buscarJuego(buscador.value, allGame)})


