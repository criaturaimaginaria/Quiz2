let Quest = [];  //set an array for all answers

const consPoint = document.querySelector(".consPoint")
const cons = document.querySelector(".cons")
const midPoint = document.querySelector(".midPoint")
const mid = document.querySelector(".mid")
const progPoint = document.querySelector(".progPoint")
const prog = document.querySelector(".prog")


// this function gives each of the answers 0 points
function populate() { 
  econPoints=0
  poliPoints=0
  socialPoints=0
  for (let i = 0; i < 20; i++) { 
      Quest[i] = {econPoints,poliPoints,socialPoints}
      
    } 
// console.log(Quest)
} 


// each answer points into the array
function saver(q, econPoints, poliPoints, socialPoints) { 
    q = q - 1; 
    Quest [q] = {econPoints,  poliPoints, socialPoints }
    // console.log(Quest)
  } 
  


// this function uses the total calculated score to figure out the position of the point
function pointPosition (myScore, VeScore, socScore) { 
 
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

// ---------------------------------------------------------------------------------
//here we get the content number to display the data from the content.js file ------
function contentNumber (myScore, VeScore, socScore) { 
        // if for social score conservative |||||||||||||||||||||||||
      if(socScore < 6.6 && myScore < 6 &&  VeScore > 14 ){
        contNumber = 0
        socArrow = conservador
      }

      else if(socScore < 6.6 && myScore < 6 &&  VeScore > 7 &&  VeScore < 14){
        contNumber = 1
        socArrow = conservador
      }

      else if(socScore < 6.6 && myScore < 6 &&  VeScore < 6 ){
        contNumber = 2
        socArrow = conservador
      }

      else if(socScore < 6.6 && myScore > 7 &&  myScore < 13 && VeScore > 14 ){
        contNumber = 3
        socArrow = conservador
      }

      else if(socScore < 6.6 && myScore > 7 &&  myScore < 13 && VeScore > 7 && VeScore < 13 ){
        contNumber = 4
        socArrow = conservador
      }

      else if(socScore < 6.6 && myScore > 7 &&  myScore < 13 && VeScore < 7 ){
        contNumber = 5
        socArrow = conservador
      }

      else if(socScore < 6.6 && myScore > 14  && VeScore > 14 ){
        contNumber = 6
        socArrow = conservador
      }

      else if(socScore < 6.6 && myScore > 14  && VeScore < 14 && VeScore > 7  ){
        contNumber = 7
        socArrow = conservador
      }

      else if(socScore < 6.6 && myScore > 14  && VeScore < 7  ){
        contNumber = 8
        socArrow = conservador
      }

      // if for social score middle, |||||||||||||||||||
      else if(socScore > 6 && socScore < 13 && myScore < 6 &&  VeScore > 14 ){
        contNumber = 0
        socArrow = socialMiddle
      }

      else if(socScore > 6 && socScore < 13  && myScore < 6 &&  VeScore > 7 &&  VeScore < 14){
        contNumber = 1
        socArrow = socialMiddle
      }

      else if(socScore > 6 && socScore < 13  && myScore < 6 &&  VeScore < 6 ){
        contNumber = 2
        socArrow = socialMiddle
      }

      else if(socScore > 6 && socScore < 13 && myScore > 7 &&  myScore < 13 && VeScore > 14 ){
        contNumber = 3
        socArrow = socialMiddle
      }

      else if(socScore > 6 && socScore < 13  && myScore > 6.9 &&  myScore < 14 && VeScore > 7 && VeScore < 13 ){
        contNumber = 4
        socArrow = socialMiddle
      }

      else if(socScore > 6 && socScore < 13 && myScore > 7 &&  myScore < 13 && VeScore < 7 ){
        contNumber = 5
        socArrow = socialMiddle
      }

      else if(socScore > 6 && socScore < 13  && myScore > 14  && VeScore > 14 ){
        contNumber = 6
        socArrow = socialMiddle
      }

      else if(socScore > 6 && socScore < 13  && myScore > 13   && VeScore > 6.8 && VeScore < 14 ){
        contNumber = 7
        socArrow = socialMiddle
      }

      else if(socScore > 6 && socScore < 13  && myScore > 14  && VeScore < 7  ){
        contNumber = 8
        socArrow = socialMiddle
      }

        // if for social score progresist  ||||||||||||||||||
        else if(socScore > 13  && myScore < 6.5 &&  VeScore > 14 ){
          contNumber = 0
          socArrow = progresista
        }
  
        else if(socScore > 13 && myScore < 6.5 &&  VeScore > 7 &&  VeScore < 14){
          contNumber = 1
          socArrow = progresista
        }
  
        else if(socScore > 13&& myScore < 6.5 &&  VeScore < 6 ){
          contNumber = 2
          socArrow = progresista
        }
  
        else if(socScore > 13 && myScore > 7 &&  myScore < 13 && VeScore > 14 ){
          contNumber = 3
          socArrow = progresista
        }
  
        else if(socScore > 13 && myScore > 7 &&  myScore < 13 && VeScore > 7 && VeScore < 13 ){
          contNumber = 4
          socArrow = progresista
        }
  
        else if(socScore > 13 && myScore > 7 &&  myScore < 13 && VeScore < 7 ){
          contNumber = 5
          socArrow = progresista
        }
  
        else if(socScore > 13 && myScore > 14  && VeScore > 14 ){
          contNumber = 6
          socArrow = progresista
        }
  
        else if(socScore > 13 && myScore > 14  && VeScore < 14 && VeScore > 7  ){
          contNumber = 7
          socArrow = progresista
        }
  
        else if(socScore > 13 && myScore > 14  && VeScore < 7  ){
          contNumber = 8
          socArrow = progresista
        }

  contentDisplay(socArrow[contNumber] )
  console.log(socScore)

}
// -------------------------------------------------------------------------


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
        pointPosition(myScore, VeScore, socScore);   
      contentNumber(myScore, VeScore, socScore);     
  
  } 

//display the data from the file contents.js
  function contentDisplay(socArrow) { 

    document.getElementById("result").innerHTML = `<br>  <B> ${(socArrow.name)} </B>  <br> 
   <p> ${(socArrow.description)} </p> <br>  <img src="${(socArrow.symbol)}" class="symbol" > `

    } 

    let acordion = document.querySelector(".quiz-question");



// ---------------------------------------------------
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
      //  console.log(acc)
      //Close other tabs
        for(var j = 0; j < acc.length; j++) {
      acc[j].nextElementSibling.style.maxHeight = null;
      acc[j].classList.remove('active');
          
    }
  
        this.classList.toggle("active");
        
        /*Toggle between hiding and showing*/
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
           panel.style.maxHeight = null;
        } else{
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      
        
    });
}








// acordion.addEventListener("click",function dropdown() { 
//   let hola = document.querySelector('.hola')
//   if(hola.style.display === "none"){
//     hola.style.display = "inline" 
//   }
//   else if(hola.style.display === "inline" ){
//     hola.style.display = "none" 
//   }
//   // document.querySelector('.hola').style.cssText = 'transition: 1s ;display:none; '  
// } )



/*
how to  close the opened Tab when I click\ again on it (when he open)
*/
// ------------------------pruebas--------------------
// document.getElementById("result").innerHTML = `<br>  <B>${(progresista[8].name)} </B> <br> 
// ${(progresista[8].description)}  <br>  <img src="${(progresista[8].symbol)}" class="symbol" > `




// for this we need to create a server, we can use : python -m http.server
// fetch("./data.json")
// .then(response => { return response.json();})
// .then(data => console.log(data));

