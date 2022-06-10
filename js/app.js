const productos = [
    { 
        id: '0',
        nombre:'Super optik',        
        anchoRollo: 1.52,
        precio: 24,
        descripcion: 'Pelicula Solar de alto desempeño, excelente proteccion UV y 10 años de garantia',
    },
    { 
        id: '1',
        nombre:'Dyed Film',        
        anchoRollo: 1.52,
        precio: 10,
        descripcion: 'Pelicula tintada, buena proteccion UV y 3 años de garantia',
    },
    { 
        id: '2',
        nombre:'Security film',        
        anchoRollo: 1.52,
        precio: 17,
        descripcion: 'Pelicula de seguridad de 4 milesimas de pulgada para disuacion de intrucion ocasional, buena proteccion UV y 3 años de garantia',
    }
    
]




// Cotizacion

function impuesto (){
    let iva = 1.19
    return iva
} 


   function soloPrecio (ancho, alto, precio, iva) {
    let resultado = (ancho * alto * precio) * iva
    resultado = resultado.toFixed(2)
    return resultado
   } 

   function referencia(eleccion, descripcion) {
       let referenciaSel = "La referencia seleccionada es " + eleccion + ": " + descripcion;
       return referenciaSel
   }

let verPrecios = document.getElementById("btnPrecios");

verPrecios.addEventListener("click", mostrarPrecios)

function mostrarPrecios() {
    Swal.fire({
        title: 'Lista de precios',
        text: 'Los precios estan en dolares y no incluyen IVA',
        imageUrl: '../img/precios.jpg',
        imageWidth: 400,
        imageHeight: 200,
      })

}
   

let boton = document.getElementById("btn");

boton.addEventListener("click", cotizacion);


function cotizacion () {
    let productoSel = document.querySelector('#item1').value;
    let medida = Number(document.querySelector('#item2').value);
    
    console.log(productoSel)
    console.log(medida)

    if (productoSel == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Debe seleccionar un producto',
          })

    } else if (medida == "") {         
        Swal.fire({
            icon: 'warning',
            title: 'Debe seleccionar los metros lineales!',
            confirmButtonText:'cerrar'
          })
        document.querySelector('#item2').focus();

    } else if (productoSel == "Super optik" && medida >= 1){
        document.querySelector("#resultado").innerHTML = soloPrecio(productos[0].anchoRollo, medida, productos[0].precio, impuesto()) + " Dolares";
        document.querySelector("#descripcion").innerHTML = referencia(productos[0].nombre, productos[0].descripcion)
        document.querySelector('#item1').value = "";
        document.querySelector('#item2').value = ""; 
        document.querySelector('#item1').focus();       
    } else if (productoSel == "Dyed Film" && medida >= 1){
        document.querySelector("#resultado").innerHTML = soloPrecio(productos[1].anchoRollo, medida, productos[1].precio, impuesto()) + " Dolares";
        document.querySelector("#descripcion").innerHTML = referencia(productos[1].nombre, productos[1].descripcion)
        document.querySelector('#item1').value = "";
        document.querySelector('#item2').value = ""; 
        document.querySelector('#item1').focus();       
    } else if (productoSel == "Security film" && medida >= 1){
        document.querySelector("#resultado").innerHTML = soloPrecio(productos[2].anchoRollo, medida, productos[2].precio, impuesto()) + " Dolares";
        document.querySelector("#descripcion").innerHTML = referencia(productos[2].nombre, productos[2].descripcion)
        document.querySelector('#item1').value = "";
        document.querySelector('#item2').value = ""; 
        document.querySelector('#item1').focus();       
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Revise los datos ingresados!',
          })
        document.querySelector('#item1').value = "";
        document.querySelector('#item2').value = "";
        document.querySelector('#item1').focus();

    }


}


// imagenes de las fichas tecnicas



let botonSO = document.getElementById("botonSO");
botonSO.addEventListener("click", imagenSO);

function imagenSO() {

   let imagen = document.getElementById("imagenft")
   imagen.src = "img/superOptik.JPG"

}

let botonDF = document.getElementById("botonDF");
botonDF.addEventListener("click", imagenDF);

function imagenDF() {

   let imagen = document.getElementById("imagenft") 
   imagen.src = "img/dyedFilm.JPG"

}


let botonSF = document.getElementById("botonSF");
botonSF.addEventListener("click", imagenSF);

function imagenSF() {

   let imagen = document.getElementById("imagenft") 
   imagen.src = "img/securityFilm.JPG"

}



// modo oscuro Pagina

botonMO = document.getElementById("botonMO")
botonMO.addEventListener("click", function(){
    if (localStorage.getItem("tema") == "oscuro") {
        lightMode()
    } else {
        darkMode()
    }
})


function darkMode(){
    let tituloP = document.getElementById("tituloP")
    tituloP.style.color = "rgb(199, 199, 109)"

    let body = document.getElementById("body")
    body.style.backgroundColor = "Black"

    let label1 = document.getElementById("label1");
    label1.style.color = "rgb(199, 199, 109)"

    let label2 = document.getElementById("label2");
    label2.style.color = "rgb(199, 199, 109)"

    let intro = document.getElementById("parrafo1");
    intro.style.color = "White"

    let intro2 = document.getElementById("parrafo2");
    intro2.style.color = "White"

    let intro3 = document.getElementById("parrafo3");
    intro3.style.color = "White"

    let intro4 = document.getElementById("parrafo4");
    intro4.style.color = "White"

    let resultado = document.getElementById("resultado");
    resultado.style.color = "rgb(199, 199, 109)"

    let descripcion = document.getElementById("descripcion");
    descripcion.style.color = "rgb(199, 199, 109)"

    let botonInfo1 = document.getElementById("botonInfo1");
    botonInfo1.style.color = "rgb(199, 199, 109)"

    let botonInfo2 = document.getElementById("botonInfo2");
    botonInfo2.style.color = "rgb(199, 199, 109)"

    let botonInfo3 = document.getElementById("botonInfo3");
    botonInfo3.style.color = "rgb(199, 199, 109)"

    let estiloBoton = document.getElementById("botonMode");
    estiloBoton.style.color = "black"
    estiloBoton.style.backgroundColor = "white"
    estiloBoton.innerHTML = "Cambiar a modo Claro"



    localStorage.setItem("tema", "oscuro")    
}



function lightMode(){
    let tituloP = document.getElementById("tituloP")
    tituloP.style.color = "rgb(31, 27, 27)"

    let body = document.getElementById("body")
    body.style.backgroundColor = "white"

    let label1 = document.getElementById("label1");
    label1.style.color = "rgb(31, 27, 27)"

    let label2 = document.getElementById("label2");
    label2.style.color = "rgb(31, 27, 27)"

    let intro = document.getElementById("parrafo1");
    intro.style.color = "rgb(31, 27, 27)"

    let intro2 = document.getElementById("parrafo2");
    intro2.style.color = "rgb(31, 27, 27)"

    let intro3 = document.getElementById("parrafo3");
    intro3.style.color = "rgb(31, 27, 27)"

    let intro4 = document.getElementById("parrafo4");
    intro4.style.color = "rgb(31, 27, 27)"

    let resultado = document.getElementById("resultado");
    resultado.style.color = "rgb(31, 27, 27)"

    let descripcion = document.getElementById("descripcion");
    descripcion.style.color = "rgb(31, 27, 27)"

    let botonInfo1 = document.getElementById("botonInfo1");
    botonInfo1.style.color = "rgb(31, 27, 27)"

    let botonInfo2 = document.getElementById("botonInfo2");
    botonInfo2.style.color = "rgb(31, 27, 27)"

    let botonInfo3 = document.getElementById("botonInfo3");
    botonInfo3.style.color = "rgb(31, 27, 27)"

    let estiloBoton = document.getElementById("botonMode");
    estiloBoton.style.color = "white"
    estiloBoton.style.backgroundColor = "black"
    estiloBoton.innerHTML = "Cambiar a modo Oscuro"

    localStorage.setItem("tema", "claro")
}


//Politica de Datos

document.addEventListener("DOMContentLoaded", politicaDatos)

function politicaDatos () {

    const url = "datos/politica.txt"

    fetch(url)

    .then( respuesta => respuesta.text())
    .then( resultado => {

        Swal.fire({
            title: 'Politica de Uso de la Plataforma',
            text : resultado,
            icon: 'info',
            confirmButtonText: 'Aceptar',
            footer: 'Aceptar politicas para continuar',
            width: '75%',
            allowOutsideClick: false,
            
            

        })
})



} 


