var count=0;

function trycountdown(time){



/* don't do it if it's already running*/
  if ((count==0)){
//init
count=time;
document.getElementById("counter").innerHTML = count;
document.getElementById("countertext").innerHTML =  "OH FUCK YOU STARTED THE COUNTDOWN";
document.getElementById("butt").style.display = "none";
//every second
var x = setInterval(function() {


  //subtract from count
  count=count-1;
  //update counter
  document.getElementById("counter").innerHTML = count;

  if (count<=5) {
    document.getElementById("countertext").innerHTML = "SHIT ITS ALMOST THERE!";
  }
  if (count<=0) {
    clearInterval(x);
    document.getElementById("countertext").innerHTML = "oh.";
  }
}, 1000);
}
}
