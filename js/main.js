function toggleSiderbarOpen() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  var aboutText = document.getElementById("about-text");
  aboutText.setAttribute("onclick", "window.scrollTo(0,0)");
  var hamburgerIcon = document.getElementsByClassName("hamburger-icon")[0];
  console.log({ hamburgerIcon });
  hamburgerIcon.classList.toggle("open");

  var projectsText = document.getElementById("projects-text");
  var contactText = document.getElementById("links-text");
  var linksText = document.getElementById("contact-text");
  var welcomeText = document.getElementById("welcome-text");
  if (aboutText.style.display == "none") {
    aboutText.style.display = "block";
    projectsText.style.display = "block";
    contactText.style.display = "block";
    linksText.style.display = "block";
    welcomeText.style.display = "block";
  } else {
    setTimeout(function () {
      aboutText.style.display = "none";
      projectsText.style.display = "none";
      contactText.style.display = "none";
      linksText.style.display = "none";
      welcomeText.style.display = "none";
    }, 500);
  }
}

function hide() {
  var element = document.getElementById("ready-button");
  element.style.display = "none";
}

function adaptToMobile(x) {
  if (x.matches) {
    // If media query matches
    var listMonkeyCard = document.getElementById("list-monkey-card");
    listMonkeyCard.style.display = "none";
    var tourButton = document.getElementById("tour-button");
    tourButton.style.display = "none";
  }
}

function hideSidebariOS() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS) {
    document.getElementById("welcome").style.transform = "translateZ(10px)";
  }
}

var x = window.matchMedia("(max-width: 480px)");
adaptToMobile(x); // Call listener function at run time
x.addListener(adaptToMobile); // Attach listener function on state changes
hideSidebariOS();
