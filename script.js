let Quest = [];  //set an array for all answers

const consPoint = document.querySelector(".consPoint")
const cons = document.querySelector(".cons")
const midPoint = document.querySelector(".midPoint")
const mid = document.querySelector(".mid")
const progPoint = document.querySelector(".progPoint")
const prog = document.querySelector(".prog")

// this function gives each of the answers 0 points so if someone doesn't answer a question 
// the whole thing will continue to work 
function populate() { 
  for (let i = 0; i < 4; i++) { 
      Quest[i] = 0; 
    } 
} 

myContents =  ["comunista"  , "centrista"  , "capitalista", "ancap" , ]


// each answer points into the array
function saver(q, econPoints, poliPoints, socialPoints) { 
    q = q - 1; 
    Quest [q] = {econPoints,  poliPoints, socialPoints }
    // console.log(Quest)
  } 
  
// this function uses the total calculated score to figure out which political ideology do you have
function analyzer (myScore, VeScore, socScore) { 
  arrContent = 0
// if for social score conservative 
    if(socScore <= 4){
          if (myScore & VeScore  > 20) { 
            arrContent = 4;
        } //5
        else if(myScore & VeScore > 15)  {
            arrContent = 3; 
            consPoint.style.cssText = `background-color: white;border-radius: 10px;`
            cons.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
        } //4
        else  if(myScore & VeScore >= 6 ) {
            arrContent = 2; 
            consPoint.style.cssText = `background-color: white;border-radius: 10px;`
            cons.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
        } //3
        else if(myScore & VeScore >= 4)     {
            arrContent = 1; 
            consPoint.style.cssText = `background-color: white;border-radius: 10px;`
            cons.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
        } //2
        else  { arrContent = 4; 
          consPoint.style.cssText = `background-color: white;border-radius: 10px;`
          cons.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
          
        } //1
       
    }
    
    console.log(arrContent)
  // myDisplay(myContents[arrContent]) 

  // console.log(myScore)
  console.log(VeScore)
} 

function analyzer2 (myScore, VeScore, socScore) { 
  arrContent = 0
  // if for social score middle, not progresist and not conservative 
      if(socScore > 4 && socScore < 10){
            if (myScore & VeScore  > 20) { 
              arrContent = 4;
          } //5
          else if(myScore & VeScore > 15)  {
              arrContent = 3; 
              midPoint.style.cssText = `background-color: white;border-radius: 10px;`
              mid.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
          } //4
          else  if(myScore & VeScore >= 6 ) {
              arrContent = 2; 
              midPoint.style.cssText = `background-color: white;border-radius: 10px;`
              mid.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
          } //3
          else if(myScore & VeScore >= 4)     {
              arrContent = 1; 
              midPoint.style.cssText = `background-color: white;border-radius: 10px;`
              mid.style.cssText = ` margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;  
          } //2
          else  { arrContent = 4; 
            midPoint.style.cssText = `background-color: white;border-radius: 10px;`
            mid.style.cssText = ` margin-left:${myScore}em; padding-top: ${VeScore}em;  `;
          } //1
         
      }
      
      console.log(arrContent)
    // myDisplay(myContents[arrContent]) 
  
    // console.log(myScore)
    console.log(VeScore)
  } 

function analyzer3 (myScore, VeScore, socScore) { 
  arrContent = 0
  // if for social score progresist 
      if(socScore > 10){
            if (myScore & VeScore  > 20) { 
              arrContent = 4;
          } //5
          else if(myScore & VeScore > 15)  {
              arrContent = 3; 
              progPoint.style.cssText = `background-color: white; border-radius: 10px; `
              prog.style.cssText = ` margin-left:${myScore}em; padding-top: ${VeScore}em; `;   
          } //4
          else  if(myScore & VeScore >= 6 ) {
              arrContent = 2; 
              progPoint.style.cssText = `background-color: white; border-radius: 10px; `
              prog.style.cssText = ` margin-left:${myScore}em; padding-top: ${VeScore}em; `;   
          } //3
          else if(myScore & VeScore >= 4)     {
              arrContent = 1; 
              progPoint.style.cssText = `background-color: white; border-radius: 10px; `
              prog.style.cssText = ` margin-left:${myScore}em; padding-top: ${VeScore}em; `;   
          } //2
          else  { arrContent = 4; 
            progPoint.style.cssText = `background-color: white; border-radius: 10px; `
            prog.style.cssText = ` margin-left:${myScore}em; padding-top: ${VeScore}em; `;    
          } //1
         
      }
      
      console.log(arrContent)
    // myDisplay(myContents[arrContent]) 
  
    // console.log(myScore)
    console.log(VeScore)
  } 


 // this function adds the number of points each answer is worth together 
function total() {  
      let myScore = 0;
      let VeScore = 0;
      let socScore = 0;

      questPoints = (Quest.map( quest => quest.econPoints));
      politicalPoints = (Quest.map( quest => quest.poliPoints));
      socialPoints = (Quest.map( quest => quest.socialPoints));

      for (let i = 0; i < 4; i++) {
           myScore = myScore + questPoints[i];
           VeScore = VeScore + politicalPoints[i];
           socScore = socScore + socialPoints[i];
        } 

        // console.log(VeScore, VeScore, socScore);
      analyzer(myScore, VeScore, socScore);      
      analyzer2(myScore, VeScore, socScore);   
      analyzer3(myScore, VeScore, socScore);    
  } 


function myDisplay(myContents) { 
document.getElementById("result").innerHTML = (myContents);

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

// - la ley debe preveer en que casos se debe vulnerar derechos individuales como medidas preventivas 
// - El Estado no debe vulnerar ningún derecho individual por motivos de seguridad.
// - el estado no debe encargarse de la seguridad, la seguridad debería ser completamente privada

//  : 7 discriminación y desigualdad entre hombres y mujeres

// - Las cuotas no son necesarias, se debe ir hacia un sistema donde todos ganen lo que merecen segun su trabajo

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

//  : 10 medio ambiente

// - debe prohibirse la contaminación aunque implique un deterioro económico
// - se debe restringir con limitacióne sestrictas la contaminación 
// - se debe promovor desde el estado las energías limpias 
// - Hay que promover las energías limpias mediante incentivos a aquellos que contaminen menos y cargas a los que contaminan más.
// - Se contaminaría menos si se estableciesen responsabilidades claras y derechos de propiedad bien definidos con respecto a la contaminación.

    



  

