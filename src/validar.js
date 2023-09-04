function validarcampo(dato) {
if (dato ===''){
 
  return false
}
  return true;
}
function validarlongitud(dato){
  var longitudtexto=dato.length;
  if(longitudtexto<=50){
    return true
  }
  return false;
}

function validarlongituddetalle(dato){
  var longitudtexto=dato.length;
  if(longitudtexto<=150){
    return true
  }
  return false;
}



export  {validarcampo,validarlongitud,validarlongituddetalle};
