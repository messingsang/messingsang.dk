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
}
