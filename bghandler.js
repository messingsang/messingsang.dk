function bgchange(str){
  if (str=='none'){
    document.getElementById("bgoverlay").style["background-color"] = "rgba(0,0,0,1)";
    //document.getElementById("everything").style["background-image"] = "none";
  }
  else {
    document.getElementById("everything").style["background-image"] = "url(images/" + str + ".jpg)";
    document.getElementById("bgoverlay").style["background-color"] = "rgba(0,0,0,0.7)";
  }

}
