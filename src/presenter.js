import {validarcampo,validarlongitud} from "./validar";

const titulo = document.querySelector("#titulo");
const contenido = document.querySelector("#detalle");
const boton = document.querySelector("#publicar");
const div = document.querySelector("#resultado-div");

boton.addEventListener("click", (event) => {
  event.preventDefault();

  const titulopost=titulo.value;
  const contenidopost=contenido.value;
  const mensajepost=validarcampo(titulopost);

  //div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  if (mensajepost==false){
    div.innerHTML=`<p>No puedes prublicar un mensaje sin título</p>
    `;
  }
  else{
    div.innerHTML=`<p>TITULO:${titulopost}</p>
    <p>CONTENIDO:${contenidopost}</p>
    
    `;
  }

});
