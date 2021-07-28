var is_robot=false;

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
