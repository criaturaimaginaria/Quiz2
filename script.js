let Quest = [];  //set an array for all answers

const point = document.querySelector(".point")

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
function analyzer (myScore, VeScore) { 

  if (myScore>34) {
       arrContent = 5;
     } //6
    else  if (myScore > 20) { 
        arrContent = 4;
     } //5
    else  if(myScore > 15)  {
        arrContent = 3; 
        point.style.cssText = `background-color: red; font-size: 1em; margin-left:${myScore}em; 
        border-radius: 10px;` ;
    } //4
    else  if(myScore >= 6 ) {
        arrContent = 2; 
        point.style.cssText = `background-color: red; font-size: 1em; margin-left:${myScore}em;
         border-radius: 10px;` ;
    } //3
    else if(myScore >= 4)     {
        arrContent = 1; 
        point.style.cssText = `background-color: red; font-size: 1em; margin-left:${myScore}em; 
        border-radius: 10px;` ;
    } //2
    else  { arrContent = 4; 
      point.style.cssText = `background-color: red; font-size: 1em; margin-left:${myScore}em;
       border-radius: 10px; `;
    } //1
    
  myDisplay(myContents[arrContent]) 

  // console.log(myScore)
  // console.log(VeScore)
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
  } 


function myDisplay(myContents) { 
document.getElementById("result").innerHTML = (myContents);

} 





