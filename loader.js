async function loadContent(url) {
  return await (await fetch(url)).text();
}

async function loadFromMenu() {
      document.getElementById("content").innerHTML = await loadContent("about.html");
}
