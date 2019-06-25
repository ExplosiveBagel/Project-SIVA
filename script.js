
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.GetElementById('PhoneNav').style.display: block;
  } else {
    document.GetElementById('PhoneNav').style.display: none;
  }
}

var x = window.matchMedia("(max-width: 1023px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
