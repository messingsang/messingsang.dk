function checks() {
sslcheck();
fbcheck();
}



function sslcheck() {
if (location.protocol === 'https:') {
// page is secure excellent
document.getElementById("sslyes1").innerHTML="90's mode enabled";
}
/*currently disabled for testing. I also don't need it anymore to be fair.
else {
//punish the user for not using https
document.getElementById("wholebody").innerHTML="Please wait until https is available on this site thank you";
}*/
}

function fbcheck() {
//punishes the user (somehow) for using fbclid
if (location.search.includes("fbclid")) {
document.getElementById("fbannoyance").innerHTML="Oh you came here from fb? Interesting shit! I wonder what I am going to do with that information in the future...";
}
else {
document.getElementById("fbannoyance").style.display="none";
}
}
