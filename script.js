let Quest = [];  //set an array for all answers

const consPoint = document.querySelector(".consPoint")
const cons = document.querySelector(".cons")
const midPoint = document.querySelector(".midPoint")
const mid = document.querySelector(".mid")
const progPoint = document.querySelector(".progPoint")
const prog = document.querySelector(".prog")


// this function gives each of the answers 0 points
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
  


// this function uses the total calculated score to figure out the position of the point
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

//here we get the content number to display the data from the content.js file
function contentNumber (myScore, VeScore, socScore) { 
        // if for social score conservative 
      if(socScore <= 6.6  ){
        contNumber = 0
        socArrow = conservador
      }

      // if for social score middle, not progresist and not conservative 
      else if(socScore > 6.6 && socScore < 13){
        contNumber = 1
        socArrow = socialMiddle
      }

        // if for social score progresist 
        else if(socScore > 13){
          contNumber = 2
          socArrow = progresista
        }

  contentDisplay(socArrow[contNumber] )
  // console.log(contNumber)

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
      contentNumber(myScore, VeScore, socScore);     
  
  } 

//display the data from the file contents.js
  function contentDisplay(socArrow) { 

    document.getElementById("result").innerHTML = `<br> <B> ${(socialMiddle[3].name)} </B>  <br> 
    ${(socialMiddle[3].description)}  <br>  <img src="${(socialMiddle[3].symbol)}" class="symbol" > `

    } 






// ------------------------pruebas--------------------
document.getElementById("result").innerHTML = `<br>  <B>${(progresista[8].name)} </B> <br> 
${(progresista[8].description)}  <br>  <img src="${(progresista[8].symbol)}" class="symbol" > `




// for this we need to create a server, we can use : python -m http.server
// fetch("./data.json")
// .then(response => { return response.json();})
// .then(data => console.log(data));

