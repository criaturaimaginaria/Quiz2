let Quest = [];  //set an array for all answers


const consPoint = document.querySelector(".consPoint")
const cons = document.querySelector(".cons")
const midPoint = document.querySelector(".midPoint")
const mid = document.querySelector(".mid")
const progPoint = document.querySelector(".progPoint")
const prog = document.querySelector(".prog")


// for this we need to create a server, we can use : python -m http.server
// fetch("./data.json")
// .then(response => { return response.json();})
// .then(data => console.log(data));



// this function gives each of the answers 0 points so if someone doesn't answer a question 
// the whole thing will continue to work 
function populate() { 
  for (let i = 0; i < 20; i++) { 
      Quest[i] = 0; 
    } 
} 





// each answer points into the array
function saver(q, econPoints, poliPoints, socialPoints) { 
    q = q - 1; 
    Quest [q] = {econPoints,  poliPoints, socialPoints }
    console.log(Quest)
  } 
  
// this function uses the total calculated score to figure out which political ideology do you have
function analyzer (myScore, VeScore, socScore) { 
 
    // if for social score conservative 
    if(socScore <= 6.6){
      consPoint.style.cssText = `background-color: white;border-radius: 10px;`
      cons.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
       
    }

     // if for social score middle, not progresist and not conservative 
     else if(socScore > 6.6 && socScore < 13){
      midPoint.style.cssText = `background-color: white;border-radius: 10px;`
      mid.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
       
    }

      // if for social score progresist 
      else if(socScore > 13){
         
        progPoint.style.cssText = `background-color: white;border-radius: 10px;`
        prog.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
         
      }


} 




 // this function adds the number of points each answer is worth together 
function total() {  
      let myScore = 0;
      let VeScore = 0;
      let socScore = 0;

      questPoints = (Quest.map( quest => quest.econPoints));
      politicalPoints = (Quest.map( quest => quest.poliPoints));
      socialPoints = (Quest.map( quest => quest.socialPoints));

      for (let i = 0; i < 20; i++) {
           myScore = myScore + questPoints[i];
           VeScore = VeScore + politicalPoints[i];
           socScore = socScore + socialPoints[i];
        } 

        // console.log(VeScore, VeScore, socScore);
      analyzer(myScore, VeScore, socScore);      
  
  } 

  console.log(conservador,socialMiddle,progresista)
  
  document.getElementById("imga").innerHTML = `<img src="${(socialMiddle[3].symbol)}" class="symbol" >`
  document.getElementById("result").innerHTML = `<br> ${(socialMiddle[3].name)}  <br> ${(socialMiddle[3].description)} `

function myDisplay(conservador) { 
document.getElementById("result").innerHTML = (conservador);

} 



// Algunas anotaciónes :
// cuestiones sociales, económicas y políticas


// 1 : libertad de expresión

// - debe prohibirse la difusión de opiniónes o ideas equivocadas 
// - debe prohibirse la difusión de opiniónes o ideas equivocadas solo si se hace con esa itnención
// - se debe prohibir la apología a ideologías extremas
// - se debe prohibir ideologías que parecen inofensivas pero que a largo plazo son dañinas parala sociedad y sus costumbres
// - el estado no debe censurar ninguna opinión en ningún caso.

//  : 2religión

// - la religión debería estar prohibida
// - algúnas religiónes extremas deberían estar prohibidas
// - el estado debe contribuir y legislar teniendo en cuenta la religión verdadera 
// - el estado no debe legislar teniendo en cuenta la religi´pon pero si financiarla
// - debe haber relativa libertad religiosa pero el estado no debe financiarlas
// - debe haber  libertad religiosa absoluta sin ninguna ayuda coactiva

//  :3 servicio militar

// - El Servicio Militar debe ser obligatorio como forma de contribuir al bien común 
// - El Servicio Militar debe ser obligatorio para proteger la nación y formar a  los jóvenes.
// - El Sercicio Militar debe ser voluntario. Es el mejor modo de tener un ejército profesional
      //  y preparado para defender nuestros intereses y compromisos en el exterior.
// ---------
// - El Servicio Militar debería ser voluntario en caso de existir ejército, y de ser así, 
        // su naturaleza debería limitarse a sus funciones más esenciales de defensa.
// - la defensa de un territorio debe darse de forma totalmente privada y sus soldados 
        //  deben ser reclutados de forma totalmente voluntaria


        //  : 4 sexo

// - Conductas como la homosexualidad, la poligamia o la prostitución deben prohibirse
// - Conductas y prácticas sexuales como la homosexualidad o la prostitución, deben estar fuertemente controladas.
// - el estado no debe entrometerse tanto en estas conductas, aunque tampoco me agradan del todo
// - 
// - el estado no debe legislar sobre asuntos privados y consensuados entre adultos

        //  : 5 drogas

// - se debe combatir penar tanto al consumidor como al traficante con penas severas
// - el estado debe combatir el tráfico de drogas y penar al traficante, no al consumidor
// - El uso de algunas de las drogas prohibidas actualmente debería ser legal, 
        //  aunque debería controlarse su distribución
// - 
// - Deberían legalizarse las drogas, despenalizando su uso y liberalizando su distribución.


//  : 6 seguridad

// - La seguridad de todos está por encima de los derechos de uno solo; Las fuerzas de
      //  seguridad del Estado no deben ver su función entorpecida porque un posible criminal 
      //  se ampare en sus derechos individuales.
// 
// - la ley debe preveer en que casos se debe vulnerar derechos individuales como medidas preventivas 
// - El Estado no debe vulnerar ningún derecho individual por motivos de seguridad.
// - el estado no debe encargarse de la seguridad, la seguridad debería ser completamente privada

//  : 7 discriminación y desigualdad entre hombres y mujeres

// - Las cuotas no son necesarias, se debe ir hacia un sistema donde todos ganen lo que merecen segun su trabajo
// 
// - Las cuotas obligatorias son el mejor instrumento para remediar las situaciones de discriminación histórica.
// - Las ayudas para la integración o los beneficios fiscales a los grupos menos representados son el mejor
    //  instrumento para paliar la discriminación.
// - Cualquier tipo de imposición o beneficio basado en criterios de sexo, raza o grupo social, viola el principio
    //  de igualdad ante la ley, y no debe ser impuesto por el Estado.

//  : 8 immigración

// la immigración no debe permitirse
// - la immigración se debe limitarse según lo que necesite la nación
// - la immigración debe limitarse para no dejar sin trabajo a los nativos
// - El Estado debe regular la inmigración para permitir que los inmigrantes necesarios vengan de un modo legal.
// - No debe haber diferencias de derechos en función del lugar de nacimiento o nacionalidad

//  : 9 nación

// - el estado debe promover la cultura local, y la identidad nacional propia
// - El Estado debe proteger y/o promover la cultura y el idioma que son propios de su nación.
// - El Estado no debe intervenir en cuestiones tan personales como la identidad o la cultura.
    //  Cada ciudadano debe tener la libertad de usar el idioma que considere.
// - 
// -

//  : 10 educación

// - La educación tiene que ser estatal y debe estar orientada según los intereses del estado/nación
// - el estado debe garantizar la educación a toda su población, ya sea de gestión privada o estatal
// - el estado edbe financiar la educación y también regular cierto tipo de contenido.
// - la educación debe ser totalmente privada sin injerencia estatal respecto a los contenidos, solo puede limitarse a financiarla en caso de que alguien no pueda permitirse pagarla
// - la educación debe ser completamente privada y libre, el estado no debe meterse en esos asuntos.

    

//  : 11 medio ambiente

// - debe prohibirse la contaminación aunque implique un deterioro económico
// - se debe restringir con limitacióne sestrictas la contaminación 
// - se debe promovor desde el estado las energías limpias 
// - Hay que promover las energías limpias mediante incentivos a aquellos que contaminen menos y cargas a los que contaminan más.
// - Se contaminaría menos si se estableciesen responsabilidades claras y derechos de propiedad bien definidos con respecto a la contaminación.

    
// ----------eje ecxonomico


//  : 12 globalización

// - se debe limitar la entrada de productos extranjeros para favorecer a los nacionales
// - se debe restringir el producto extranjero porque se produce con mano de obra barata y no se puede competir
// - se debe limitar la importación de productos extranjeros porque perjudican la cultura local
// - el estado debe interferir lo menos posible en el comercio internacional con aranceles bajos
// - El estado no debe entrometerse en el comercio internacional, tanto de forma regulatoria o impositiva


//  : 13 impuestos

// - los ricos deberían pagar mas impuestos para aumentar las prestaciónes del estado
// - los impuestos deberían subir si es necesario
// - los impuestos no deberían subir, deben ser los justos y suficientes para mantener el funcionamento del estado
// - Los impuestos deberían reducirse, aunque para ello haya que recortar algunas prestaciones y servicios del Estado.
// - los impuestos no deberían existir, son un robo

//  : 14 pensiones

// - Las pensiones de jubilación deben ser gestionadas por el Estado con un sistema público de contribuciones obligatorias (Seguridad Social).
// - las pensiones deben ser de gestión completamente estatal y se debe brindar una jubilación sin aportes a aaqquellas personas que no pudieron durante su vida laboral
// - las pensiones deberían ser mixtas, privadas con cierta ayuda estatal
// - las pensiones deben del obligatorias pero de gestión privada
// - Las pensiones de jubilación son un asunto de ahorro y planificación individual. El Estado no debe exigir contribuciones obligatorias a un sistema público.


//  : 15 solidaridad

// - El estado puede y debe encargarse de eliminar y reducir la pobreza y la desigualdad
// - El estado debe gestionar asistencia a los mas necesitados independientemente de ls ayudas privadas
// - La solidaridad debe estar principalmente en manos privadas, exceptuandoo algunoss casos particulares
// - Las instituciones privadas de caridad deben ser las principales canalizadoras de la solidaridad de la sociedad.
// - La solidaridad debe nacer de la sociedad, el estado no debe meterse, ya que dejaría de ser solidaridad.


//  : 16 permisos

// - Los sectores profesionales tienen que estar regulados por las leyes. El ejercicio de las profesiones cualificadas debe requerir de las oportunas licencias y permisos otorgadas en cada caso por el órgano competente del Estado.
// 
// - Los sectores profesionales deben estar regulados por organismos independientes, como los colegios profesionales. Los profesionales cualificados deben colegiarse en ellos, ya que su supervisión garantiza la calidad de sus servicios.
// 
// - Las licencias, permisos y colegios profesionales son trabas innecesarias. El ejercicio de cualquier profesión debe ser libre para cualquier persona cualificada.


//  : 17 sindicatos

// - los sindicatos no son necesarios si el estado se ocupa de todos los problemas de los trabajardores eficientemente 
// - el estado debe financiar a los sindicatos y otorgarles funciones especiales
// 
// - los sindicatos deben tener funciones especiales en la legislación laboral pero no deben ser financiados por el estado
// - Los sindicatos deben regirse por las normas aplicables a cualquier otra asociación, y no recibir financiación pública o atribuírseles funciones especiales.


//  : 18 sanidad

// el estado debe tener el monopolio de la sanidad debido a que no se deben hacer negocios con ella
// - El Estado debe gestionar centros médicos de carácter público, y financiarlos mediante contribuciones a un seguro médico público de carácter obligatorio (Seguridad Social).
// - El Estado debe garantizar el acceso universal a la sanidad mediante centros con algún tipo de financiación pública, sean gestionados o no por el Estado.
// - no debe haber sanidad de gestión p+úbliuca, pero el estado puede financiarle los tratamientos y las medicinas a quienes no puedan pagarlos
// - Gestionar centros médicos no debe ser una función del Estado. Los centros médicos deben ser privados, y los ciudadanos ser libres de contratar el seguro médico que prefieran.

//  : 19 controles de precios, grandes empresas y mercado laboral

// - 
// - 
// - 
// - 
// - 

//  : 20 bancos

// - tanto el banco central como el sistema bancario deben ser publicos y atender a las necesidades sociales 
// - el banco central debe tener una función especial a la hora de regular la economía mediante tipos de interés ty emisión monetaria
// - El Banco Central debería reducir sus competencias y ser mas independiente, y los bancos comerciales ser todos de carácter privado.
// - El banco central debería tener un tipo de cambio fijo (convertibilidad) o ser sumamente cuidadoso a la hora de realizar política monetaria
// - El banco central no debería existir, el dinero es una institución privado y debería garantizarse la libertad monetaria.





  

