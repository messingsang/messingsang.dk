var count=0;  //global just cuz
//the whole damn function needs to be rewritten as a site-global singleton for this to work.



function trycountdown(time) {
//is the input a positive integer? Is global count precisely zero?
  if ((time > 0)&&(Number.isInteger(time))&&(count==0)){
    //good now init
    count=time;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("countertext").innerHTML =  "OH FUCK YOU STARTED THE COUNTDOWN";
    document.getElementById("butt").style.display = "none";
  
    //okay now set an interval with 1000ms and store the id globally (pragma once would be nice here)
    var timerid=setInterval(updateTimer, 1000);    
  }
 
  else {
  //if it's not a valid input clear the damn button/link just in case. WE DONT NEED NO OVERFLOWS!
  document.getElementById("butt").innerHTML="Whatcha tryn'a do? Break my website?"
  }
  
  //okay now within that scope
  function updateTimer() {
    //is timer still valid?
    if (count>=0){
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
    else {
      //clear async
      clearInterval(timerid);
      //you could init count just for kixx
      //count=0;
    }
  }
}
