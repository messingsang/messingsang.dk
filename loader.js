async function loadContent(url) {
  return await (await fetch(url)).text();
}

async function loadFromMenu(str) {
      if (str === 'about'){
      document.getElementById("content").innerHTML = await loadContent("about.html");
      }
      else if (str === 'classified'){
      document.getElementById("content").innerHTML = await loadContent("classified.html");
      }
      else if (str === 'thanks'){
      document.getElementById("content").innerHTML = await loadContent("thanks.html");
      }
      else if (str === 'weed'){
      document.getElementById("content").innerHTML = await loadContent("cannabis.html");
      }
      else if (str === 'supersecretshit'){
      document.getElementById("content").innerHTML = await loadContent("supersecretpasswordentry.html");
      }
}

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

    menu_on=false;

  }
  else if (str==='main'&&menu_on===false){
    var bdvs=document.getElementsByClassName("buttondivs l1");
    //change height of all buttondivs back to 70
    for(let i=0; i<bdvs.length; i++) {
    bdvs[i].style["pointerEvents"] = "auto";
    bdvs[i].style["height"] = "70px";
    bdvs[i].style["opacity"] = "1";
    }
    //document.getElementById("menucontainer").style.display = "block";
    menu_on=true;
  }
}

function toggle_submenu_collapse(str){
    if (str==='about'&&about_submenu_on===true){
    //grab array of buttondivs
    var bdvs=document.getElementsByClassName("buttondivs l2");
    //change height of all buttondivs to 0
    for(let i=0; i<bdvs.length; i++) {
    bdvs[i].style.pointerEvents = "none";
    bdvs[i].style.height = "0px";
    bdvs[i].style.opacity = "0";
    bdvs[i].style.border = "none";
    }
    //document.getElementById("menucontainer").style.display = "none";
    about_submenu_on=false;
  }
  else if (str==='about'&&about_submenu_on===false){
    var bdvs=document.getElementsByClassName("buttondivs l2");
    //change height of all the right divs back to 50
    for(let i=0; i<bdvs.length; i++) {
    bdvs[i].style.pointerEvents = "auto";
    bdvs[i].style.height = "50px";
    bdvs[i].style.opacity = "1";
    bdvs[i].style.border = "2px solid black";
    }
    //document.getElementById("menucontainer").style.display = "block";
    about_submenu_on=true;
  }
}
