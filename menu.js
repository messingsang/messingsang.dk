var menu_on=true;
var about_submenu_on=true;
function toggle_menu_collapse(str) {

  if (str==='main'&&menu_on===true){
    //grab array of buttondivs
    var bdvs=document.getElementsByClassName("buttondivs l1");

    //change height of all buttondivs to 0
    for(let i=0; i<bdvs.length; i++) {
    bdvs[i].style["pointerEvents"] = "none";
    bdvs[i].style["height"] = "0px";
    bdvs[i].style["opacity"] = "0";
    }
    //if any submenus are on close em
    if (about_submenu_on==true) {
      toggle_submenu_collapse('about');
    }

    //unreserve menucontainer
    //document.getElementById("menucontainer").style.height="0px";
    //make sure we know globally the menu is off
    menu_on=false;

  }
  else if (str==='main'&&menu_on===false){
    var bdvs=document.getElementsByClassName("buttondivs l1");
    //reserve some space with the menucontainer immediately
    //document.getElementById("menucontainer").style.height=(74*bdvs.length+"px");
    //change height of all buttondivs back to 70
    for(let i=0; i<bdvs.length; i++) {
    bdvs[i].style["pointerEvents"] = "auto";
    bdvs[i].style["height"] = "70px";
    bdvs[i].style["opacity"] = "1";
    }

    menu_on=true;
  }
}

function toggle_submenu_collapse(str){
    if (str==='about'&&about_submenu_on===true){
    //grab array of buttondivs
    var sbdvs=document.getElementsByClassName("buttondivs l2");
    //change height of all buttondivs to 0
    for(let i=0; i<sbdvs.length; i++) {
    sbdvs[i].style.pointerEvents = "none";
    sbdvs[i].style.height = "0px";
    sbdvs[i].style.opacity = "0";
    //sbdvs[i].style.border = "none";
    }
    //unreserve space
    //document.getElementById("aboutsubcontainer").style.height=("0px");
    about_submenu_on=false;
  }
  else if (str==='about'&&about_submenu_on===false){
    var sbdvs=document.getElementsByClassName("buttondivs l2");
    //reserve some more space in the menucontiner
    //document.getElementById("aboutsubcontainer").style.height=(54*sbdvs.length+"px");
    //change height of all the right divs back to 50
    for(let i=0; i<sbdvs.length; i++) {
    sbdvs[i].style.pointerEvents = "auto";
    sbdvs[i].style.height = "50px";
    sbdvs[i].style.opacity = "1";
    //sbdvs[i].style.border = "2px solid transparent";
    }
    about_submenu_on=true;
  }
}
