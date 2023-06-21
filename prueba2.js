// PROYECTO E-COMMERCER DE VIDEOSJUEGOS
//CLASS CONTRUCTORA

class game {
  constructor(id, nombre, genero, consola, precio){
      this.id = id,
      this.nombre = nombre,
      this.genero = genero,
      this.consola = consola,
      this.precio = precio
  }
  mostrarInfoGame (){
      console.log(`este juegos se llama ${this.nombre} su genero es ${this.genero} se encuentra disponible para la consola ${this.consola} a un precio de ${this.precio}`)
      
  }
}

//INSTANCIACION DE OBJETOS

const game1 = new game (1,"God of War Ragnarok","accion y aventura","Playstation",20000)
const game2 = new game (2,"Uncharted 4","accion y aventura","Playstation",10000)
const game3 = new game (3,"Spider-man","accion y aventura","Playstation",15000)
const game4 = new game (4,"Gears of War 5 ","accion","Xbox",8000)
const game5 = new game (5,"Halo Infinite","fps","Xbox",8500)
const game6 = new game (6,"Forza Horizon 5","conduccion","Xbox",15000)


//ARRAY DE OBJETOS
const allGame = []
allGame.push(game1, game2, game3, game4, game5, game6)


//FUNCION PARA MOSTRAR EL CATALOGO

function catalogo(array){
  console.log(`Catalogo de todo los videojuegos disponibles:`)
      let lista = array.map(juego => juego.nombre + " para la consola " + juego.consola + " "+"$"+ juego.precio).join("\n")
         alert(`El catalogo de videojuegos es :\n${lista}`)

}
// catalogo(allGame)

// FUNCION PARA FILTRAR POR NOMBRE

function filtrarPorNombre(array){
  let datoBusqueda = prompt("Ingrese el nombre del videojuego que esta buscando")
  let busqueda = array.filter(
          (juego) => juego.nombre.toLowerCase().includes(datoBusqueda.toLowerCase()) == datoBusqueda.toLowerCase().includes(datoBusqueda.toLowerCase())  )
            if(busqueda.length == 0){
               alert(`El videojuego ${datoBusqueda} no está en nuestro catalogo `)
  }         else{
             let busquedaJuegos = busqueda.map((juego) => juego.nombre + " para la consola " + juego.consola).join("\n")
               alert(`Se encontraron coincidencias con su búsqueda.`)
               alert(`Los videojuegos encontrados son:\n${busquedaJuegos}`)
}
  }

//  filtrarPorNombre(allGame)

//FUNCION PARA  FILTRAR POR NOMBRE DE CONSOLA

function filtrarPorConsola(array){
  let preguntabusqueda = prompt(`Busqueda de videojuegos por consola "Ingrese su consola"`)
  let busqueda = array.filter(
            (dato) => dato.consola.toLowerCase().includes(preguntabusqueda.toLowerCase()) == preguntabusqueda.toLowerCase().includes(preguntabusqueda.toLowerCase()) )
               if(busqueda.length == 0){                                                                                     alert(`La consola ${preguntabusqueda} no está en nuestro catalogo `)}            
               else{let datoBusqueda = busqueda.map((juego)=> juego.nombre).join("\n")
                          alert(`Se encontraron coincidencias con su búsqueda.`)
                          alert(`Los videojuegos encontrados Para la consola ${preguntabusqueda} son :\n${datoBusqueda}`)
  }
}
//filtrarPorConsola(allGame)


//FILTRAR DE MENOR A MAYOR EL PRECIO
function ordenarMenorMayor(array){
  const menorMayor = [].concat(array)
  console.log(menorMayor)
  menorMayor.sort((a,b) => a.precio - b.precio)
  catalogo(menorMayor)
}

//  ordenarMenorMayor(allGame)

// FILTRAR DE MAYOR A MENOR POR PRECIO
function ordenarMayorMenor(array){
  const MayorMenor = [].concat(array)
  console.log(MayorMenor)
  MayorMenor.sort((a,b) => b.precio - a.precio)
 catalogo(MayorMenor)
}

//  ordenarMayorMenor(allGame)


//FUNCION PARA FILTRAR POR PRECIO MAX

function filtrarPorPrecio(array){
  let precioIngresado = parseInt(prompt("Ingrese el precio máximo que quiere pagar"))
  let busqueda = array.filter(
     (game) => {return  game.precio <= precioIngresado }
  )
if (busqueda.length == 0) {alert(`No hay ningun videojuego disponible por ese precio`)}
else{ let precioPregunta = busqueda.map((juego)=> juego.nombre + " "+ "para la consola" + " "+juego.consola + " $"+juego.precio
  ).join("\n") 
  alert(`Los videojuegos disponibles por ese precio son:\n${precioPregunta}`)}
  eleccionMayorMenor(array) }

//  filtrarPorPrecio(allGame)



//ELECCION DE MAYOR A MENOR O VICEVERSA
function eleccionMayorMenor(array) {alert(`Tambien puede elegir ver todo el catalogo por precio de mayor a menor o viceversa `)
let preguntaMayorMenor =  parseInt(prompt(`elige entre:\n 1. ver catalogo por precio de Mayor a menor\n 2. ver catalogo por precio de menor a mayor\n 3. Salir` ))
if ( preguntaMayorMenor == 1){ alert(ordenarMayorMenor(array))} else if (preguntaMayorMenor == 2) alert(ordenarMenorMayor(array));else {salirMenu}}

// eleccionMayorMenor(allGame)



//MENU

alert("¡Bienvenidos a GAMES PLUS !")

let salirMenu = false
 
do{
let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
  
   1 - Consultar catálogo
   2 - Buscar videojuegos por nombre
   3 - Buscar Videojuegos por consola
   4 - Buscar por precio
   0 - Salir del menu`))


  switch(opcionIngresada){

     case 1:
        catalogo(allGame)
     break
     case 2:
        filtrarPorNombre(allGame)
                break
     case 3:
        filtrarPorConsola(allGame)
                break
     case 4:
      filtrarPorPrecio(allGame)
               break            
      case 5:
    

               break
     case 0:
        alert(`Gracias por utilizar nuestra app. Vuelva pronto!`)
        salirMenu = true
              break   
     default:
        alert("Opción no válida, ingrese alguna presente en el menu")
              break
  }
}while(!salirMenu)


menu()


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










