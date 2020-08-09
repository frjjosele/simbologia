$selectSimbologia=document.getElementById("selecSimbolos");
/* const $sectionSimbolos=document.getElementById("simbolos");
 */
const $carouselItemMecanismo=document.getElementById("carousel-item-mecanismo");
const $carouselitemMultifilar=document.getElementById("carousel-item-multifilar");
const $carouselitemUnifilar=document.getElementById("carousel-item-unifilar");
const $carouselItemCondiciones=document.getElementById("carousel-item-condiciones");
function loadDoc(event){
  console.log($carouselItemMecanismo.firstElementChild.src);
  console.log(simbolos[event].mecanismo);
  $carouselItemMecanismo.firstElementChild.src=simbolos[event].mecanismo;
  $carouselitemUnifilar.firstElementChild.src=simbolos[event].unifilar;
  $carouselitemMultifilar.firstElementChild.src=simbolos[event].multifilar;
  console.log($carouselItemCondiciones.firstElementChild);
  $carouselItemCondiciones.firstElementChild.textContent=simbolos[event].condiciones;
/*   $sectionSimbolos.innerHTML=`<img src=${simbolos[event].mecanismo}></img>
                    <img src=${simbolos[event].unifilar}></img>
                    <img src=${simbolos[event].multifilar}></img>
                    <p>Descripción ${simbolos[event].descriptcion}</p>
                    <p>Descripción ${simbolos[event].condiciones}</p>`; */
}
