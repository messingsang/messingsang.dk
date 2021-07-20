async function loadContent(url) {
  return await (await fetch(url)).text();
}

async function loadFromMenu(conStr) {
  switch (conStr){
    case 'about':
      document.getElementById("content").innerHTML = await loadContent("about.html");
    break;
    default:
      document.getElementById("content").innerHTML = "Whoa dude something went wrong!"

}
