async function preloadContent(url) {
  return await (await fetch(url)).text();
}


async function loadFromMenu(str) {
      //first we blackout by default
      bgchange('none');

      //then firgure out what we wanna do
      if (str === 'weed'){
      bgchange('weed');
      document.getElementById("content").innerHTML = await preloadContent("content_html/cannabis.html");
      }
      else if (str === 'supersecretshit'){
      document.getElementById("content").innerHTML = await preloadContent("content_html/supersecretpasswordentry.html");
      }
      else if (str==='about'||str==='questions'||str==='classified'||str==='thanks'){
        document.getElementById("content").innerHTML = await preloadContent("content_html/" + str + ".html");
      }
      else{
        console.log("something weird is going on in the load function");
      }
}
