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





