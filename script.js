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
        console.log("con")
        contNumber = 0
      }

      // if for social score middle, not progresist and not conservative 
      else if(socScore > 6.6 && socScore < 13){
        console.log("mid")
        contNumber = 1
      }

        // if for social score progresist 
        else if(socScore > 13){
          console.log("prog")
          contNumber = 2
        }

  contentDisplay(conservador[contNumber].name)
  console.log(contNumber)

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


  // console.log(myScore, VeScore, socScore)
  
  // document.getElementById("imga").innerHTML = `<img src="${(socialMiddle[3].symbol)}" class="symbol" >`
  // document.getElementById("result").innerHTML = `<br> ${(socialMiddle[3].name)}  <br> ${(socialMiddle[3].description)} `

  function contentDisplay(conservador) { 
    document.getElementById("result").innerHTML = (conservador);
    console.log((conservador) + "content display")
    } 



// for this we need to create a server, we can use : python -m http.server
// fetch("./data.json")
// .then(response => { return response.json();})
// .then(data => console.log(data));

