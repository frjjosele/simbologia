$selectSimbologia=document.getElementById("simbolos");
const $demo=document.getElementById("demo");
function loadDoc(event){
  console.log(event);
 
  $demo.innerHTML=`<img src=${simbolos[event].mecanismo}></img>
                    <img src=${simbolos[event].unifilar}></img>
                    <img src=${simbolos[event].multifilar}></img>
                    <p>Descripción ${simbolos[event].descriptcion}</p>
                    <p>Descripción ${simbolos[event].condiciones}</p>`;
}

/* "mecanismo":"../images/mecanismo/interruptor.png",
     "unifilar":"../images/unifilar/interruptorUni.png",
     "Multifilar":"../images/multifilar/interruptorMulti.png",
     "descriptcion":"Interruptor",
     "Condiciones":"Empotrado en caja de mecanismo a una altura de 110 cm de pavimento y 15 cm del marco de la puerta (a excepción de  cabeceros en dormitorios). A derecha o izquierda de éste pero siempre en el mismo lado del mecanismo de apertura de la puerta. Se prestará especial interés en la correcta fijación de la caja de mecanismo, debiendo estar nivelada y enrasada, de forma que permita que la placa de los mecanismos queden perfectamente adosados al paramento. Los mecanismos deberán interrumpir la fase."     */