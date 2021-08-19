let Quest = [];  //set an array for all answers
let verticalQ = [];
const point = document.querySelector(".point")

// this function gives each of the answers 0 points so if someone doesn't answer a question 
// the whole thing will continue to work 
function populate() { 
  for (let i = 0; i < 4; i++) { 
      Quest[i] = 0; 
      verticalQ[i] = 0;
    } 
} 


myContents =  ["comunista"  , "centrista"  , "capitalista", "ancap" , ]

// each answer points into the array
function saver(q, points, Vpoints) { 
    q = q - 1; 
    Quest [q] = {points,  Vpoints}
    // verticalQ [q] = Vpoints
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
        point.style.cssText = `background-color: red; font-size: 1em; margin-left:${myScore}em; border-radius: 10px;` ;
    } //4
    else  if(myScore >= 6 ) {
        arrContent = 2; 
        point.style.cssText = `background-color: red; font-size: 1em; margin-left:${myScore}em; border-radius: 10px;` ;
    } //3
    else if(myScore >= 4)     {
        arrContent = 1; 
        point.style.cssText = `background-color: red; font-size: 1em; margin-left:${myScore}em; border-radius: 10px;` ;
    } //2
    else  { arrContent = 4; 
      point.style.cssText = `background-color: red; font-size: 1em; margin-left:${myScore}em; border-radius: 10px; `;
    } //1
    
  myDisplay(myContents[arrContent]) 

  // console.log(myScore)
  // console.log(VeScore)
} 


 // this function adds the number of points each answer is worth together 
function total() {  
      let myScore = 0 ;
      let VeScore = 0;

      questPoints = (Quest.map( quest => quest.points));
      verticalPoints = (Quest.map( quest => quest.Vpoints));
      console.log(verticalPoints)

      for (let i = 0; i < 4; i++) {
          //  VeScore = VeScore + verticalQ[i];
           myScore = myScore + questPoints[i];
           VeScore = VeScore + verticalPoints[i];
        } 

       
       
        console.log(VeScore);
      analyzer(myScore);       
  } 

// let varticall = [0];

// function fun(){
//   let VeScore = 0;
   
//   for ( let i = 0 ; i < 10; i++ ) {
//      VeScore = VeScore + varticall[i];
//     } 
//     console.log(VeScore);
// }
 
// fun()


function myDisplay(myContents) { 
document.getElementById("result").innerHTML = (myContents);

} 





