// Menu Related Stuff.

$(document).ready(function(){
  $('.menuToggle').click(function(){
    $("#menuContainer").stop().animate({
      width: 'toggle'
    });
    if (+window.localStorage.getItem("menustatus")) {
      window.localStorage.setItem("menustatus", 0);
    } else {
      window.localStorage.setItem("menustatus", 1);
    }
  }); 
});

// Code so menu position persists through reloads.

if (+window.localStorage.getItem("menustatus")) {
  document.getElementById('menuContainer').style.display = "block";   
}

// Button Related Stuff.


const menuButtons = document.getElementsByClassName('menuButton')

function showHideMenu() {
  if (menuButtons[4].innerHTML === "Show Menu") {
    menuButtons[4].innerHTML = "Hide Menu";
  } else {
    menuButtons[4].innerHTML = "Show Menu";
  }
}

function changeColourHoverIn() {
    this.style.color = "black";
}
function changeColourHoverOut() {
    this.style.color = "white";
} 

for(var i=0; i< menuButtons.length; i++){
  menuButtons[i].addEventListener("mouseover", changeColourHoverIn);
  menuButtons[i].addEventListener("mouseout", changeColourHoverOut); 
}

menuButtons[4].addEventListener("click", showHideMenu);

export { menuButtons }

// Other.
document.addEventListener("load", loadTimes())

function loadTimes() {
  if (localStorage.loadCount) {
    localStorage.loadCount = Number(localStorage.loadCount)+1;
  } else {
    localStorage.loadCount = 1;
  }
  document.getElementById("loginCount").innerHTML = "You've been here:" + " " + localStorage.loadCount + " " + "times!";
}








