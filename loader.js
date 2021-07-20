async function loadContent(url) {
  return await (await fetch(url)).text();
}

async function loadAbout() {
  document.getElementById("content").innerHTML = await loadContent("about.html");
}
