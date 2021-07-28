var menu_on=true;
var about_submenu_on=true;
function toggle_menu_collapse(str) {

  if (str==='main'&&menu_on===true){
    //grab array of buttondivs
    var bdvs=document.getElementsByClassName("menu_buttondivs_l1");

    //change height of all buttondivs to 0
    for(let i=0; i<bdvs.length; i++) {
    bdvs[i].style["pointerEvents"] = "none";
    bdvs[i].style["height"] = "0px";
    bdvs[i].style["opacity"] = "0";
    }
    //if any submenus are on close em
    if (about_submenu_on==true) {
      toggle_submenu_collapse();
    }

    //unreserve menucontainer
    //document.getElementById("menucontainer").style.height="0px";
    //make sure we know globally the menu is off
    menu_on=false;

  }
  else if (str==='main'&&menu_on===false){
    var bdvs=document.getElementsByClassName("menu_buttondivs_l1");
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

function toggle_submenu_collapse(){
    if (about_submenu_on===true){
    var sbdvs=document.getElementsByClassName("menu_buttondivs_l2");
    for(let i=0; i<sbdvs.length; i++) {
    sbdvs[i].style.pointerEvents = "none";
    sbdvs[i].style.height = "0px";
    sbdvs[i].style.opacity = "0";
    }
    about_submenu_on=false;
  }
  else if (about_submenu_on===false){
    sbdvs=document.getElementsByClassName("menu_buttondivs_l2");
    for(let i=0; i<sbdvs.length; i++) {
    sbdvs[i].style.pointerEvents = "auto";
    sbdvs[i].style.height = "50px";
    sbdvs[i].style.opacity = "1";
    }
    about_submenu_on=true;
  }
}
