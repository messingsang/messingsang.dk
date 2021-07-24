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
function toggle_menu_collapse() {
  if (menu_on===true){
    //grab array of buttondivs
    var bdvs=document.getElementsByClassName("buttondivs");

    //change height of all buttondivs to 0
    for(let i=0; i<bdvs.length; i++) {
    bdvs[i].style["pointerEvents"] = "none";
    bdvs[i].style["height"] = "0px";
    bdvs[i].style["opacity"] = "0";
    }

    //document.getElementById("menucontainer").style.display = "none";
    menu_on=false;

  }

  else if (menu_on===false){

    var bdvs=document.getElementsByClassName("buttondivs");

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
