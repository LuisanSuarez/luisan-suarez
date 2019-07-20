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
        }, 500)
    }
  }