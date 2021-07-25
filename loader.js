async function loadContent(url) {
  return await (await fetch(url)).text();
}

async function loadFromMenu(str) {
      if (str === 'weed'){
      document.getElementById("content").innerHTML = await loadContent("content_html/cannabis.html");
      }
      else if (str === 'supersecretshit'){
      document.getElementById("content").innerHTML = await loadContent("content_html/supersecretpasswordentry.html");
      }
      else if (str==='about'||str==='questions'||str==='classified'||str==='thanks'){
        document.getElementById("content").innerHTML = await loadContent("content_html/" + str + ".html");
      }
      else{
        console.log("something weird is going on in the load function");
      }
}
