window.setTimeout(ButtonVisible, 2000)
/*/////////////////////////////////////*/

/*//On Page load button is set on timer to display 2 seconds later//*/
function ButtonVisible() {
document.getElementById('Confirm').style.opacity = "1";
document.getElementById('Confirm').style.display = "block";
}

/*//After button has been clicked, display will = none. the home section will be displayed.//*/
function ButtonDisplayOff() {			document.getElementById('Confirm').style.display = "none";
document.getElementById('home').style.display = "block";
}


function Confirmclick() {
document.getElementById('Confirm').style.opacity = "0";
document.getElementById 
document.getElementById('heading1').style.display = "none";
	window.setTimeout(Delay, 1000);
	window.setTimeout(ButtonDisplayOff, 1000)
}


function Delay() {
document.getElementById('heading2').style.display = "block";
	window.setTimeout(Ani2Fin, 9000);
}


function Ani2Fin() {
document.getElementById('heading2').style.display = "none";
	document.getElementById('heading3').style.display = "block";
	window.setTimeout(LoadHome, 2500);
}


function LoadHome() {
document.getElementById('home').style.opacity = "1";
}
