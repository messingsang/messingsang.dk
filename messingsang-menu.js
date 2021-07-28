var menu_on=true;
var about_submenu_on=true;
var menu_location='lander';

function toggle_menu_collapse() {

  if (menu_on===true){
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

    menu_on=false;

  }
  else if (menu_on===false){
    var bdvs=document.getElementsByClassName("menu_buttondivs_l1");
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

async function preloadContent(url) {
  return await (await fetch(url)).text();
}


async function loadFromMenu(str){
  switch(str){
    case 'weed':
      bgchange('weed');
      gamehandler('weed');
      document.getElementById("content").innerHTML = await preloadContent("content_html/cannabis.html");
      break;
    case 'supersecretshit':
    gamehandler('supersecretshit');
      bgchange('none');
      count=0;
      if (shitunlocked=true){
        document.getElementById("content").innerHTML = await preloadContent("content_html/supersecretpasswordentry.html");
        menu_location='supersecretshit';
      }
      break;
    default:
      bgchange(str);
      gamehandler(str);
      document.getElementById("content").innerHTML = await preloadContent("content_html/" + str + ".html");
      menu_location=str;
  }
}




/*
async function loadFromMenuDeprecated(str) {
      if (str == 'weed'){
        bgchange('weed');
        document.getElementById("content").innerHTML = await preloadContent("content_html/cannabis.html");
        menu_location='weed';
        if (infected==true){
          overlaychange('normal');
          document.getElementById("statusbox").style["background-color"]="#225522"
          document.getElementById("sslyes1").innerHTML = "Mary Jane cures all.";
          cured=true;
          infected=false;
        }
      }
      else if (str == 'supersecretshit'){
        bgchange('none');
        count=0;
        if (cured==true&&is_robot==true){
        document.getElementById("content").innerHTML = await preloadContent("content_html/supersecretpasswordentry.html");
        }
        else{
        document.getElementById("content").innerHTML = "All rules must be followed at the same time."
        }
        menu_location='supersecretshit';
      }
      else if (str=='youwerenew'||str=='music'||str=='humor'||str=='about'||str=='questions'||str=='classified'||str=='thanks'||str=='aboutwebsite'){
        bgchange(str);
        document.getElementById("content").innerHTML = await preloadContent("content_html/" + str + ".html");
        menu_location='other';
      }
      else if (str=='ressource'){
        document.getElementById("content").innerHTML = await preloadContent("content_html/ressource.html");

        menu_location='ressource';
      }
      else{
        console.log("something weird is going on in the load function");
      }
}*/
