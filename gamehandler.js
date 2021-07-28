var is_robot=false;
var infected=false;
var cured=false;
var shitunlocked=false;

function becomerobot(){
  console.log("user became robot");
  if (is_robot==true){
    document.getElementById("captcha").innerHTML="You are already classified as a robot.";
  }
  else {
  is_robot=true;
  document.getElementById("captcha").innerHTML="Once a robot, always a robot.";
  }
}


function gamehandler(str){
  switch(str){

    case 'weed':
      if (infected==true){
        overlaychange('normal');
        document.getElementById("statusbox").style["background-color"]="#225522"
        document.getElementById("sslyes1").innerHTML = "Mary Jane cures all.";
        cured=true;
        infected=false;
      }
      break;

    case 'ressource':
        overlaychange('reddish');
        document.getElementById("statusbox").style["background-color"]="#552222";
        document.getElementById("sslyes1").innerHTML = "Oh fuck! You've been infected with Dannebro! Smoke some weed to cure it!";
        cured=false;
        infected=true;
      break;
    case 'supersecretshit':
       if (cured==true&&is_robot==true){
         shitunlocked=true;
         document.getElementById("statusbox").style["background-color"]="#cccccc";
         document.getElementById("sslyes1").innerHTML = "Super Secret Shit Unlocked!";
       }
    break;
    default:
  }
}
