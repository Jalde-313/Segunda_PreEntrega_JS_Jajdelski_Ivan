// PARA MOSTRAR EL CATALOGO

// function catalogo(array){
//   console.log(`Catalogo de todo los videojuegos disponibles:`)
//       let lista = array.map(juego => juego.nombre + " para la consola " + juego.consola + " "+"$"+ juego.precio).join("\n")
//          alert(`El catalogo de videojuegos es :\n${lista}`)

// }
// catalogo(allGame)


// FUNCION PARA FILTRAR POR NOMBRE

// function filtrarPorNombre(array){
//   let datoBusqueda = prompt("Ingrese el nombre del videojuego que esta buscando")
//   let busqueda = array.filter(
//           (juego) => juego.nombre.toLowerCase().includes(datoBusqueda.toLowerCase()) == datoBusqueda.toLowerCase().includes(datoBusqueda.toLowerCase())  )
//             if(busqueda.length == 0){
//                alert(`El videojuego ${datoBusqueda} no está en nuestro catalogo `)
//   }         else{
//              let busquedaJuegos = busqueda.map((juego) => juego.nombre + " para la consola " + juego.consola).join("\n")
//                alert(`Se encontraron coincidencias con su búsqueda.`)
//                alert(`Los videojuegos encontrados son:\n${busquedaJuegos}`)
// }
//   }

//  filtrarPorNombre(allGame)

//FUNCION PARA  FILTRAR POR NOMBRE DE CONSOLA

// function filtrarPorConsola(array){
//   let preguntabusqueda = prompt(`Busqueda de videojuegos por consola "Ingrese su consola"`)
//   let busqueda = array.filter(
//             (dato) => dato.consola.toLowerCase().includes(preguntabusqueda.toLowerCase()) == preguntabusqueda.toLowerCase().includes(preguntabusqueda.toLowerCase()) )
//                if(busqueda.length == 0){                                                                                     alert(`La consola ${preguntabusqueda} no está en nuestro catalogo `)}            
//                else{let datoBusqueda = busqueda.map((juego)=> juego.nombre).join("\n")
//                           alert(`Se encontraron coincidencias con su búsqueda.`)
//                           alert(`Los videojuegos encontrados Para la consola ${preguntabusqueda} son :\n${datoBusqueda}`)
//   }
// }
//filtrarPorConsola(allGame)


//FILTRAR DE MENOR A MAYOR EL PRECIO
// function ordenarMenorMayor(array){
//   const menorMayor = [].concat(array)
//   console.log(menorMayor)
//   menorMayor.sort((a,b) => a.precio - b.precio)
//   catalogo(menorMayor)
// }

// //  ordenarMenorMayor(allGame)

// // FILTRAR DE MAYOR A MENOR POR PRECIO
// function ordenarMayorMenor(array){
//   const MayorMenor = [].concat(array)
//   console.log(MayorMenor)
//   MayorMenor.sort((a,b) => b.precio - a.precio)
//  catalogo(MayorMenor)
// }

//  ordenarMayorMenor(allGame)


//FUNCION PARA FILTRAR POR PRECIO MAX

// function filtrarPorPrecio(array){
//   let precioIngresado = parseInt(prompt("Ingrese el precio máximo que quiere pagar"))
//   let busqueda = array.filter(
//      (game) => {return  game.precio <= precioIngresado }
//   )
// if (busqueda.length == 0) {alert(`No hay ningun videojuego disponible por ese precio`)}
// else{ let precioPregunta = busqueda.map((juego)=> juego.nombre + " "+ "para la consola" + " "+juego.consola + " $"+juego.precio
//   ).join("\n") 
//   alert(`Los videojuegos disponibles por ese precio son:\n${precioPregunta}`)}
//   eleccionMayorMenor(array) }

//  filtrarPorPrecio(allGame)



// //ELECCION DE MAYOR A MENOR O VICEVERSA
// function eleccionMayorMenor(array) {alert(`Tambien puede elegir ver todo el catalogo por precio de mayor a menor o viceversa `)
// let preguntaMayorMenor =  parseInt(prompt(`elige entre:\n 1. ver catalogo por precio de Mayor a menor\n 2. ver catalogo por precio de menor a mayor\n 3. Salir` ))
//                 if ( preguntaMayorMenor == 1){ ordenarMayorMenor(array)}                                                     else if (preguntaMayorMenor == 2) ordenarMenorMayor(array);                                                     else {salirMenu}}

// // eleccionMayorMenor(allGame)



//MENU

// alert("¡Bienvenidos a GAMES PLUS !")

// let salirMenu = false
 
// do{
// let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
  
//    1 - Consultar catálogo
//    2 - Buscar videojuegos por nombre
//    3 - Buscar Videojuegos por consola
//    4 - Buscar por precio
//    0 - Salir del menu`))


//   switch(opcionIngresada){

//      case 1:
//         catalogo(allGame)
//      break
//      case 2:
//         filtrarPorNombre(allGame)
//                 break
//      case 3:
//         filtrarPorConsola(allGame)
//                 break
//      case 4:
//       filtrarPorPrecio(allGame)
//                break            
//       case 5:
    

//                break
//      case 0:
//         alert(`Gracias por utilizar nuestra app. Vuelva pronto!`)
//         salirMenu = true
//               break   
//      default:
//         alert("Opción no válida, ingrese alguna presente en el menu")
//               break
//   }
// }while(!salirMenu)


// menu()


// BUSQUEDA POR VIDEOJUEGO O CONSOLA NO IMPLEMENTADO EN EL MENU

// function filtrarPorNombreOconsola(array){
//     let datoBusqueda = prompt("Ingrese el nombre del video juegos o consola que esta buscando")
//     let busqueda = array.filter(
//        (juego) => juego.nombre.toLowerCase().includes(datoBusqueda.toLowerCase()) == datoBusqueda.toLowerCase().includes(datoBusqueda.toLowerCase()) || juego.consola.toLowerCase().includes(datoBusqueda.toLowerCase()) == datoBusqueda.toLowerCase().includes(datoBusqueda.toLowerCase()) );
//     if(busqueda.length == 0){
//        console.log(`El videojuego ${datoBusqueda} no está en nuestro catalogo `)
//     }else{
//     console.log(busqueda)

//     }
//  }


// function agregarAlCarrito(Game){
//   let GameAgregado = productosEnCarrito.find((elem)=>elem.id == Game.id) 
//   if(GameAgregado == undefined){
//      productosEnCarrito.push(Game)
//      localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
//      console.log(productosEnCarrito)
//   }else{
//      console.log(`El Juego ${Game.nombre} ya existe en el carrito `)
//   }
// }






// function mostrarCatalogoPlay(array) {
//   juegosPlayDiv.innerHTML = '';
  
//   for (let juego of array) {
//     const consolaFiltrada = 'PlayStation'
    
//     if (juego.consola === consolaFiltrada) {
//       let nuevoJuegoPlayDiv = document.createElement('div');
//       nuevoJuegoPlayDiv.className = 'col-12 col-md-6 col-lg-4 my-2';
//       nuevoJuegoPlayDiv.innerHTML = `
//         <div id="${juego.id}" class="card" style="width: 15rem;">
//           <img class="card-img-top img-fluid" style="height:400px; width:600px;" src="assets/${juego.imagen}" alt="${juego.titulo} de ${juego.genero}">
//           <div class="card-body">
//             <h6 class="card-title">${juego.nombre}</h6>
//             <h4 class="card-title">${juego.consola}</h4>
//             <p class="">Precio: $${juego.precio}</p>
//             <button id="agregarBtn${juego.id}" class="btn btn-outline-primary">Agregar al carrito</button>
//           </div>
//         </div>`;
      
//       juegosPlayDiv.appendChild(nuevoJuegoPlayDiv);
      
//       let agregarBtn = document.getElementById(`agregarBtn${juego.id}`);
      
//       agregarBtn.addEventListener('click', () => {
//         agregarAlCarrito(juego);
//       });
//     }
//   }
// }

// let juegosPlayDiv = document.getElementById("catalogoPlay")

// function catalogoPlay(array){
//   juegosPlayDiv.innerHTML = ``
//   for(let juegosPlay of array ){
//      let nuevojuegoDiv = document.createElement("div")
//      //agregar class
//      nuevojuegoDiv.className = "col-12 col-md-6 col-lg-4 my-2"
//      nuevojuegoDiv.innerHTML = `<div id="${juegosPlay.id}" class="card" style="width: 15rem;">
//                                 <img class="card-img-top img-fluid" style="height:400px width:600px"src="assets/${juegosPlay.imagen}" alt="${juegosPlay.titulo} de ${juegosPlay.genero}">
//                                 <div class="card-body">
//                                    <h6 class="card-title">${juegosPlay.nombre}</h6>
//                                    <h4 class="card-title">${juegosPlay.consola}</h4>
                              
//                                    <p class="">Precio: $${juegosPlay.precio}</p>
//                                 <button id="" class="btn btn-outline-success">Agregar al carrito</button>
//                                 </div>
//                              </div>`
//      juegosPlayDiv.appendChild(nuevojuegoDiv)
//   }

// }
// let CatalogoPlay= document.getElementById("catalogoPlay")

// CatalogoPlay.addEventListener("click", ()=>{
//    catalogoPlay(playGame)
// })

  
///////////////////////////////////////////////////////////////////////////////////
function mostrarCatalogoPlay(array) {
    juegoPlayDiv.innerHTML = '';
  
    const consolaFiltrada = 'PlayStation'; 
  
    for (let juego of array) {
      if (juego.consola === consolaFiltrada) {
        let nuevoJuegoPlayDiv = document.createElement('div');
        nuevoJuegoPlayDiv.className = 'col-12 col-md-6 col-lg-4 my-2';
        nuevoJuegoPlayDiv.innerHTML = `
          <div id="${juego.id}" class="card" style="width: 15rem;">
            <img class="card-img-top img-fluid" style="height:400px; width:600px;" src="assets/${juego.imagen}" alt="${juego.nombre} de ${juego.genero}">
            <div class="card-body">
              <h6 class="card-title">${juego.nombre}</h6>
              <h4 class="card-title">${juego.consola}</h4>
              <p class="">Precio: $${juego.precio}</p>
              <button id="agregarBtn${juego.id}" class="btn btn-outline-primary">Agregar al carrito</button>
            </div>
          </div>`;
  
        juegoPlayDiv.appendChild(nuevoJuegoPlayDiv);
  
        let agregarBtn = document.getElementById(`agregarBtn${juego.id}`);
  
        agregarBtn.addEventListener('click', () => {
          agregarAlCarrito(juego);
        });
      }
    }
  }