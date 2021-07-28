async function preloadContent(url) {
  return await (await fetch(url)).text();
}

var menu_location='lander';
var infected=false;
var cured=false;
async function loadFromMenu(str) {
      //first we blackout by default
      //bgchange('none'); on second thought let's not blackout by default
      //it is a silly thing to do
      //then firgure out what we wanna do
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
      /*I donno what on Earth I was thinking when I wrote This
      but any additional content needs to be added here*/
      else if (str=='youwerenew'||str=='music'||str=='humor'||str=='about'||str=='questions'||str=='classified'||str=='thanks'||str=='aboutwebsite'){
        bgchange(str);
        document.getElementById("content").innerHTML = await preloadContent("content_html/" + str + ".html");
        menu_location='other';
      }
      else if (str=='ressource'){
        document.getElementById("content").innerHTML = await preloadContent("content_html/ressource.html");
        bgchange('none');
        overlaychange('reddish');
        document.getElementById("statusbox").style["background-color"]="#552222";
        document.getElementById("sslyes1").innerHTML = "Oh fuck! You've been infected with Dannebro! Smoke some weed to cure it!";
        cured=false;
        infected=true;
        menu_location='ressource';
      }
      else{
        console.log("something weird is going on in the load function");
      }
}
