import {validarcampo,validarlongitud,validarlongituddetalle} from "./validar";

const titulo = document.querySelector("#titulo");
const contenido = document.querySelector("#detalle");
const boton = document.querySelector("#publicar");
const div = document.querySelector("#resultado-div");

let titulopost1='';
let titulopost2='';
boton.addEventListener("click", (event) => {
  event.preventDefault();

  const titulopost=titulo.value;
  const contenidopost=contenido.value;
  const mensajepost=validarcampo(titulopost);
  const longitudmensaje=validarlongitud(titulopost);
  const longitudcontenido=validarlongituddetalle(contenidopost);

  //div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  if (mensajepost==false || longitudmensaje==false || longitudcontenido==false){
    div.innerHTML=`<p>No puedes prublicar un mensaje sin título /con longitud mas de 50 caracteres /contenido mas e 150 Caracteres </p>

    `;
  }
  else{
    if(titulopost1 ===""){
      titulopost1=titulopost;
    }
    else if (titulopost2 ===""){
      titulopost2=titulopost;
    }
    div.innerHTML=`<p>PRIMER TITULO:${titulopost1}</p>
    <p>SEGUNDO TITULO:${titulopost2}</p>
    <p>CONTENIDO:${contenidopost}</p>
    
    
    `;
  }

});
