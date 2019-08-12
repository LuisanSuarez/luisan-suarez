function toggleSiderbarOpen() {
    var element = document.getElementById("sidebar");
    element.classList.toggle("open");
    var aboutText = document.getElementById("about-text");
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
        setTimeout(function() {
            aboutText.style.display = "none";
            projectsText.style.display = "none";
            contactText.style.display = "none";
            linksText.style.display = "none";
            welcomeText.style.display = "none";
        }, 500);
    };
  };

function hide() {
    var element = document.getElementById("ready-button");
    element.style.display = "none";
}

function addDisclaimer(x) {
  if (x.matches) { // If media query matches
    var disclaimer = document.createElement('span');
    disclaimer.classList.add("monkey-subtitle");
    disclaimer.innerHTML = "&nbsp&nbsp&nbsp(desktop only)";

    var listMonkeyCard = document.getElementById("list-monkey-card");
    listMonkeyCard.style.display = "none"
  }
}

function hideSidebariOS() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS ) {
        document.getElementById("welcome").style.transform = "translateZ(10px)"
    }
}

var x = window.matchMedia("(max-width: 480px)")
addDisclaimer(x) // Call listener function at run time
x.addListener(addDisclaimer) // Attach listener function on state changes
hideSidebariOS()