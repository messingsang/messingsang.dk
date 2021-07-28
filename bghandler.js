function bgchange(str){
  if (str=='none'){
    //document.getElementById("bgoverlay").style["background-color"] = "rgba(0,0,0,1)";
    document.getElementById("bgphoto").style["background-image"] = "url(images/dummy_black.jpg)";
  }
  else if (str=='weed'||str=='weed2'||str=='youwerenew'){
    document.getElementById("bgphoto").style["background-image"] = "url(images/" + str + ".jpg)";
    //document.getElementById("bgoverlay").style["background-color"] = "rgba(0,0,0,0.7)";
  }
  else {
    //default to the dummy bg
    document.getElementById("bgphoto").style["background-image"] = "url(images/dummy_black.jpg)";
  }

}


function overlaychange(str){
  if (str=='normal'){
  document.getElementById("bgoverlay").style["background-color"] = "rgba(0,0,0,0.7)";
  }
  if (str=='reddish'){
    document.getElementById("bgoverlay").style["background-color"] = "rgba(100,0,0,0.7)";
  }
  if (str=='off'){
    document.getElementById("bgoverlay").style["background-color"] = "rgba(0,0,0,0)";
  }
}
