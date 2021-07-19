function checks() {
sslcheck();
fbcheck();
}


function sslcheck() {
if (location.protocol === 'https:') {
// page is secure excellent
document.getElementById("sslyes1").innerHTML="https check done";
}
else {
//punish the user for not using https
document.getElementById("wholebody").innerHTML="You miserable fool you forgot to type in https://";
}
}

function fbcheck() {
//punishes the user (somehow) for using fbclid
let q = location.search.get('fbclid');
alert(q);
if (location.search.includes("fbclid")) {
document.getElementById("fbannoyance").innerHTML="Oh you came here from fb? Interesting shit! I wonder what I am going to do with that information in the future...";
}
else {
document.getElementById("fbannoyance").style.display="none";
}
}
