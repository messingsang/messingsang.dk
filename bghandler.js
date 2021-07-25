function bgchange(str){
  if (str=='none'){
    //document.getElementById("bgoverlay").style["background-color"] = "rgba(0,0,0,1)";
    document.getElementById("everything").style["background-image"] = "url(images/dummy_black.jpg)";
  }
  else if (str=='weed'||str=='weed2'){  //we'll have to add to this later
    document.getElementById("everything").style["background-image"] = "url(images/" + str + ".jpg)";
    //document.getElementById("bgoverlay").style["background-color"] = "rgba(0,0,0,0.7)";
  }
  else {
    //default to the dummy bg
    document.getElementById("everything").style["background-image"] = "url(images/dummy_black.jpg)";
  }

}
