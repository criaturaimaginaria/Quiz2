let Quest = [];  //set an array for all answers

// this function gives each of the answers 0 points so if someone doesn't answer a question 
// the whole thing will continue to work 
function populate() { 
  for (let i = 0; i < 10; i++) { 
      Quest[i] = 0; } 
      // console.log(Quest)
} 


myContents =  ["puto"  , "super puto"  , "super super puto", "jajaja puto" , ]

// each answer points into the array
function saver(q, points) { 
    q = q - 1; 
    Quest [q] = points 
  } 
  
// this function uses the total calculated score to figure out which personality type they are 
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
        document.querySelector(".point").style.cssText = "background-color: red; font-size: 1em; margin-left:5em;" ;
    } //3
    else if(myScore > 2)     {
        arrContent = 1; 
        document.querySelector(".point").style.cssText = "background-color: red; font-size: 1em; margin-left:2em;" ;
    } //2
    else  { arrContent = 0; 
      document.querySelector(".point").style.cssText = "background-color: red; font-size: 1em; " ;
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


      // if(myScore == 6){
      //   document.querySelector(".point").style.cssText = "background-color: rgb(255, 0, 0); font-size: 1em" ;
      // }
      // else if(myScore == 13){
      //   document.querySelector(".point").style.cssText = "background-color: green; font-size: 1em" ;
      // }
      
    } 


function myDisplay(myContents) { 
document.getElementById("result").innerHTML = (myContents);

} 


// -------------------------------

// function cube (){
//     let point = document.getElementById("point")
// }



