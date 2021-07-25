async function preloadContent(url) {
  return await (await fetch(url)).text();
}

var location='lander';
async function loadFromMenu(str) {
      //first we blackout by default
      //bgchange('none'); on second thought let's not blackout by default
      //it is a silly thing to do
      if (location=='ressource'&&!str=='ressource'){
      overlaychange('none');
      }
      //then firgure out what we wanna do
      if (str == 'weed'){
        bgchange('weed');
        document.getElementById("content").innerHTML = await preloadContent("content_html/cannabis.html");
        location='weed';
      }
      else if (str == 'supersecretshit'){
        bgchange('none');
        document.getElementById("content").innerHTML = await preloadContent("content_html/supersecretpasswordentry.html");
        location='supersecretshit';
      }
      else if (str=='about'||str==='questions'||str==='classified'||str==='thanks'){
        bgchange(str);
        document.getElementById("content").innerHTML = await preloadContent("content_html/" + str + ".html");
        location='other';
      }
      else if (str=='ressource'){
        document.getElementById("content").innerHTML = await preloadContent("content_html/ressource.html");
        overlaychange('reddish');
        location='ressource';
      }
      else{
        console.log("something weird is going on in the load function");
      }
}
