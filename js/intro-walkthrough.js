function startIntro(){
  var intro = introJs();
    intro.setOptions({
      steps: [
        {
          intro: "Welcome :) This is Luisan's assistant, I'll be showing you around. Click 'next' whenever you're ready to move on, 'back' if you want to go back, and 'skip' or outside this window to exit this walkthrough."
        },
        {
          element: '#step1',
          intro: "This button will take you Luisan's projects. Click next to have me take you to them!"
        },
        {
          element: "#step2",
          intro: "Hover over a project to learn more about it",
          position: 'right'
        },
        {
          element: '#step2',
          intro: 'Click anywhere on the card to stop it from turning back.',
          position: 'left'
        },
        {
          element: '#step5',
          intro: 'Open the menu to see more details about each button',
          position: "bottom"
        },
        {
          element: '#step6',
          intro: 'Here is where you can reach Luisan',
          position: "right"
        },
        {
          element: '#step7',
          intro: "That's it! If you need me, just click on me again. I'll be in my corner!"
        }
      ]
    })
    intro.setOption('showBullets', false);
    intro.setOption('showProgress', true)

    intro.onafterchange(function(targetElement) {
        if(this._currentStep === 1){
            largeHeader = document.getElementById("large-header");
            largeHeader.classList.remove("introjs-fixParent")
        }
        if(this._currentStep === 4){
            overlay = document.getElementsByClassName("introjs-overlay")[0];
            helperLayer = document.getElementsByClassName("introjs-helperLayer")[0];
            sidebar = document.getElementById("sidebar");

            overlay.style.zIndex = "0";
            helperLayer.style.zIndex = "0";
            sidebar.classList.remove("introjs-fixParent")
        }
        if(this._currentStep === 5){
            overlay = document.getElementsByClassName("introjs-overlay")[0];
            helperLayer = document.getElementsByClassName("introjs-helperLayer")[0];
            sidebar = document.getElementById("sidebar");

            overlay.style.zIndex = "0";
            helperLayer.style.zIndex = "0";
            sidebar.classList.remove("introjs-fixParent")
        }
    });

    intro.start();
}
