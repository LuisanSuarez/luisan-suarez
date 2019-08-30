function startIntro(){
  var intro = introJs();
    intro.setOptions({
      steps: [
        // {
        //   intro: "Hello world! This is Luisan"
        // },
        // {
        //   intro: "You <b>don't need</b> to define element to focus, this is a floating tooltip."
        // },
        {
          element: '#step1',
          intro: "This is a tooltip."
        },
        {
          element: "#step2",
          intro: "Ok, wasn't that fun?",
          position: 'right'
        },
        {
          element: '#step3',
          intro: 'More features, more fun.',
          position: 'left'
        },
        {
          element: '#step4',
          intro: "Another step.",
          position: 'bottom'
        },
        {
          element: '#step5',
          intro: 'Get it, use it.'
        }
      ]
    });
    intro.start();
}
