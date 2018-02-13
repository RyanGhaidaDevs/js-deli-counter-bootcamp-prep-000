var katzDeli = []; //This is the beginning of the day, 0 people in the restaurant. 
var katzDeliLine = []; //This is the current line of people

  /* Need to populate katzDeliLine with Names via array.push() . */ 


function takeANumber (katzDeliLine, name) {
 var i = 0; 


    katzDeliLine.push(name) 
   
   i++;
   
    console.log(katzDeliLine) //[name]
  
    
    return  `You are ${katzDeliLine[i-1]} in line!`

}

function nowServing (katzDeliLine) { 
// return the first person in line and then remove that individual from the line.
/* katzDeliLine is currently ["Ada", "Grace"], 
currentLine(katzDeliLine) would return 
"The line is currently: 1. Ada, 2. Grace". 
If there is nobody in line, it should return "The line is currently empty." */ 

 
}

function currentLine (katzDeliLine){
  /* if katzDeliLine is currently ["Ada", "Grace"], 
  currentLine(katzDeliLine) would return 
  "The line is currently: 1. Ada, 2. Grace". 
  If there is nobody in line, it should return 
  "The line is currently empty."*/ 


}






