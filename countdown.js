var count=0;
/* THIS TIMER IS FUCKED DONT USE IT
function updateTimer(){
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



function trycountdown(time){
//is the input a positive integer?
  if ((time > 0)&&(Number.isInteger(time))){
    //good now init
    count=time;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("countertext").innerHTML =  "OH FUCK YOU STARTED THE COUNTDOWN";
    document.getElementById("butt").style.display = "none";
  
    //okay now do this shit until count reaches 0 or below
    while (count>0){
      //update timer after 1000ms delay
      setTimeout(updateTimer(), 1000);
      }
    }
  /*
      else {
      // no need to clear async
      }
  */
  else {
  //if it's already running clear the damn button/link just in case
  document.getElementById("butt").style.display = "none";
  }
}
