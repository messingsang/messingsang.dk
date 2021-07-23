var count=0;

function updateTimer(){
  //subtract from count
  count--;
  //update display
  document.getElementById("counter").innerHTML = count;
}



function trycountdown(time){
/* is the countdown initialized?*/
  if ((count==0)){
    //init
    count=time;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("countertext").innerHTML =  "OH FUCK YOU STARTED THE COUNTDOWN";
    document.getElementById("butt").style.display = "none";
    
    //okay now do this shit until count reaches 0 or below
    while (count>0){
    
      //is count a positive integer?
      if ((count > 0)&&(Number.isInteger(count)){
         //update timer with 1000ms delay
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
