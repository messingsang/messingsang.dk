async function preloadContent(url) {
  return await (await fetch(url)).text();
}

var menu_location='lander';
var infected=false;
async function loadFromMenu(str) {
      //first we blackout by default
      //bgchange('none'); on second thought let's not blackout by default
      //it is a silly thing to do
      //then firgure out what we wanna do
      if (str == 'weed'){
        bgchange('weed');
        document.getElementById("content").innerHTML = await preloadContent("content_html/cannabis.html");
        menu_location='weed';
        if (infected==true;){
          overlaychange('normal');
          document.getElementById("sslyes1").innerHTML = "Mary Jane cures all.";
          infected=false;
        }
      }
      else if (str == 'supersecretshit'){
        bgchange('none');
        document.getElementById("content").innerHTML = await preloadContent("content_html/supersecretpasswordentry.html");
        menu_location='supersecretshit';
      }
      else if (str=='about'||str==='questions'||str==='classified'||str==='thanks'){
        bgchange(str);
        document.getElementById("content").innerHTML = await preloadContent("content_html/" + str + ".html");
        menu_location='other';
      }
      else if (str=='ressource'){
        document.getElementById("content").innerHTML = await preloadContent("content_html/ressource.html");
        bgchange('none');
        overlaychange('reddish');
        document.getElementById("sslyes1").innerHTML = "Oh fuck! You've been infected with Dannebro! Smoke some weed to cure it!";
        infected=true;
        menu_location='ressource';
      }
      else{
        console.log("something weird is going on in the load function");
      }
}
