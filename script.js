let Quest = [];  //set an array for all answers
const point = document.querySelector(".point")

// this function gives each of the answers 0 points so if someone doesn't answer a question 
// the whole thing will continue to work 
function populate() { 
  for (let i = 0; i < 10; i++) { 
      Quest[i] = 0; } 
      // console.log(Quest)
} 


myContents =  ["comunista"  , "centrista"  , "capitalista", "jajaja puto" , ]

// each answer points into the array
function saver(q, points) { 
    q = q - 1; 
    Quest [q] = points 
  } 
  
// this function uses the total calculated score to figure out which political ideology do you have
function analyzer (myScore) { 

  if (myScore>34) {
       arrContent = 5;
     } //6
    else  if (myScore > 27) { 
        arrContent = 4;
     } //5
    else  if(myScore > 20)  {
        arrContent = 3; 
    } //4
    else  if(myScore > 6 ) {
        arrContent = 2; 
        point.style.cssText = "background-color: red; font-size: 1em; margin-left:14em;" ;
    } //3
    else if(myScore > 2)     {
        arrContent = 1; 
        point.style.cssText = "background-color: red; font-size: 1em; margin-left:7em;" ;
    } //2
    else  { arrContent = 0; 
      point.style.cssText = "background-color: red; font-size: 1em; " ;
    } //1
    
  myDisplay(myContents[arrContent]) 

  console.log(myScore)
} 

 // this function adds the number of points each answer is worth together 
function total() {  
      myScore = 0; 
      for (let i = 0; i < 10; i++) {
           myScore = myScore + Quest[i]; 
        } 

      analyzer(myScore);       
    } 


function myDisplay(myContents) { 
document.getElementById("result").innerHTML = (myContents);

} 


// -------------------------------

// function cube (){
//     let point = document.getElementById("point")
// }



