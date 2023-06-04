
let listaSuper = []

// aca se agregan los productos al carrito mediante el .push sumo a listasuper los productos
function agregarProducto() {
  let nuevoProducto = prompt("Ingrese un nuevo producto:")
  listaSuper.push(nuevoProducto)
  alert("Producto agregada: " + nuevoProducto)
}
// en esta funcion se busca eliminar el producto siempre y cuando exista en el caso que no exista se emite un alert que ese producto no existe ( .indexOf y el .splice son metodos que investigue yo no estaban explicado en las clases hasta la fecha )

function borrarProducto() {
    if (listaSuper.length === 0) {
        alert('No hay productos en la lista.')
      }
  else { let productoABorrar = prompt("Ingrese el producto que desea eliminar:")
   let i = listaSuper.indexOf(productoABorrar)
   if (i !== -1) {
     listaSuper.splice(i, 1)
     alert(" Producto eliminado: " + productoABorrar)
   } else {
     alert("El producto no existe en la lista.")
   }}
 }

// muestra la lista del supermercado. \n y  el metodo .join tambien lo investigue para que la lista me quede en modo lista uno a bajo de otro (hace salto de linea.)

 function mostrarLista() {
    if (listaSuper.length === 0) {
      alert("No hay productos en la lista.")
    } else {
      alert("Lista de productos:\n" + listaSuper.join("\n"))
    }
  }

// menu basado en las clases que dio el profe

 let salirMenu = false

 alert("¡La App Lista del Super le da la bienvenida!")

do {

let opcionIngresada = parseInt(prompt(`Por favor Ingrese la opción deseada :
   1. Agregar productos a la lista del Super.
   2. Borrar productos de la lista del Super.
   3. Mostrar todos los productos de la lista.
   4. Salir. `))

  switch (opcionIngresada) {
    case 1:
      agregarProducto()
      break
    case 2:
      borrarProducto()
      break
      case 3 :
         mostrarLista()
         break
    case 4:
      alert("Gracias por utilizar la App Lista de super.")
      salirMenu = true
      break
    default:
      alert("Opción inválida. Intente nuevamente.")
      break
  }
} while (!salirMenu)