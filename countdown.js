var count=0;

function updateTimer(){
  //subtract from count
  count--;
  //update display
  document.getElementById("counter").innerHTML = count;
}



function trycountdown(time){
/* don't do it if it's already running*/
  if ((count==0)){
//init
    count=time;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("countertext").innerHTML =  "OH FUCK YOU STARTED THE COUNTDOWN";
    document.getElementById("butt").style.display = "none";
    
    //is count a positive integer?
    if ((count > 0)&&(Number.isInteger(count)){
        //update timer with 1000ms delay
        setTimeout(updateTimer(), 1000);
  }
  /*
    else {
       // no need to clear async
    }
  */
}

