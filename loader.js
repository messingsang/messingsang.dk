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
    //change height of buttondivs to 0
    document.getElementsByClassName("buttondivs").style.maxHeight=0;
    document.getElementById("menucontainer").style.display = "none";
    menu_on=false;
  }
  else if (menu_on===false){
    //change height of buttondivs to undefined
    document.getElementsByClassName("buttondivs").style.maxHeight=null;
    document.getElementById("menucontainer").style.display = "block";
    menu_on=true;
  }
  
}
