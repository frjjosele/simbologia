const $selectSimbologia=document.getElementById("selecSimbolos");
const $sectionSimbolos=document.getElementById("carousel");
const $descripcion=document.getElementById("descripcion")
const $carouselItemMecanismo=document.getElementById("carousel-item-mecanismo");
const $carouselitemMultifilar=document.getElementById("carousel-item-multifilar");
const $carouselitemUnifilar=document.getElementById("carousel-item-unifilar");
const $carouselItemCondiciones=document.getElementById("carousel-item-condiciones");
$(document).ready(function() {
  $('.main__select').select2({
    width:"resolve"
  });

})
function loadDoc(event){

  let imagenes;
  imagenes=encontrarImg($carouselItemMecanismo);

  imagenes.src=simbolos[event].mecanismo;

  imagenes=encontrarImg($carouselitemUnifilar);
  imagenes.src=simbolos[event].unifilar;

  imagenes=encontrarImg($carouselitemMultifilar);
  imagenes.src=simbolos[event].multifilar;

  $carouselItemCondiciones.children[1].innerHTML=simbolos[event].condiciones;
  $descripcion.textContent=simbolos[event].descripcion;
  $sectionSimbolos.style.display="block";
  $descripcion.style.display="block";

}

function encontrarImg(elemento){
  const tam=elemento.children.length;
  let i=0;
  let contador=1;
  while(contador==1){
    if(elemento.children[i].localName=="img"){
      contador=0;
    }
    i++;
  }
  return elemento.children[i-1];
}