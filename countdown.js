var count=0;
var asyncid;


function updateTimer(){
  //has timer expired?
  if (count<=0){
    //clear async
    clearInterval(asyncid);
    //you could init count just for kixx
    //count=0;
  }
  else{
  //subtract from count
  count--;
  //update display
  document.getElementById("counter").innerHTML = count;
  //additional fun
  if (count == 5){
    document.getElementById("countertext").innerHTML =  "SHIT IT'S ALMOST THERE!";
  }
  if (count == 0){
    document.getElementById("countertext").innerHTML =  "Oh. I guess this isn't implemented yet.";
  }
  }
}



function trycountdown(time){
//is the input a positive integer?
  if ((time > 0)&&(Number.isInteger(time))){
    //good now init
    count=time;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("countertext").innerHTML =  "OH FUCK YOU STARTED THE COUNTDOWN";
    document.getElementById("butt").style.display = "none";
  
    //okay now set an interval with 1000ms and store the id globally (pragma once would be nice here)
    asyncid=setInterval(updateTimer(){};, 1000);    
  }
 
  else {
  //if it's not a valid input clear the damn button/link just in case. WE DONT NEED NO OVERFLOWS!
  document.getElementById("butt").style.display = "none";
  }
}
