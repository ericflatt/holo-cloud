var SPE_USES_PREVIEW_IMAGE = false;
const runtime = new SpeRuntime(SPLINE_EXPORTED_SCENE, SPLINE_ASSETS_LIST);
runtime.run();




// $(document).ready(function () {
//   $('#scroll').marquee({
//       speed: 28000,
//       gap: 0,
//       delayBeforeStart: 0,
//       direction: 'left',
//       duplicated: true
//   });

// });



  
  function mouseOverOne() {
    document.getElementById("changeOne").style.backgroundImage =
      "url(../images/one.jpg)";
  }
  
  function mouseOverTwo() {
    document.getElementById("changeOne").style.backgroundImage =
      "url(../images/two.jpg)";
  }
  
  function mouseOverThree() {
    document.getElementById("changeOne").style.backgroundImage =
      "url(../images/three.jpg)";
  }
  
  function mouseOut() {
    document.getElementById("changeOne").style.backgroundImage =
      "url(../images/featuresBGtwo.png)";
  }
  
  function faqAnswer() {
    document.getElementById("faq-answer").style.visibility = "visible";
  }
  
  function faqGone() {
    document.getElementById("faq-answer").style.visibility = "hidden";
  }
  
  function faqAnswerTwo() {
    document.getElementById("faq-answerTwo").style.visibility = "visible";
  }
  
  function faqGoneTwo() {
    document.getElementById("faq-answerTwo").style.visibility = "hidden";
  }
  
  function faqAnswerThree() {
    document.getElementById("faq-answerThree").style.visibility = "visible";
  }
  
  function faqGoneThree() {
    document.getElementById("faq-answerThree").style.visibility = "hidden";
  }
  
  function faqAnswerFour() {
    document.getElementById("faq-answerFour").style.visibility = "visible";
  }
  
  function faqGoneFour() {
    document.getElementById("faq-answerFour").style.visibility = "hidden";
  }
  
  function faqAnswerFive() {
    document.getElementById("faq-answerFive").style.visibility = "visible";
  }
  
  function faqGoneFive() {
    document.getElementById("faq-answerFive").style.visibility = "hidden";
  }
  
  function bgChange() {
    document.getElementById("features").style.backgroundImage =
      "url(../images/one.png)";
  }
  
  function bgOriginal() {
    document.getElementById("features").style.backgroundImage =
      "url(../images/featuresBGtwo.png)";
  }
  
  function bgChangeTwo() {
    document.getElementById("features").style.backgroundImage =
      "url(../images/two.png)";
  }
  
  function bgOriginalTwo() {
    document.getElementById("features").style.backgroundImage =
      "url(../images/featuresBGtwo.png)";
  }
  
  function bgChangeThree() {
    document.getElementById("features").style.backgroundImage =
      "url(../images/three.png)";
  }
  
  function bgOriginalThree() {
    document.getElementById("features").style.backgroundImage =
      "url(../images/featuresBGtwo.png)";
  }
  
  // // Get the modal
  // var modal = document.getElementById("modelOne");
  // // var modal = document.getElementById("myModalTwo");
  // // var modal = document.getElementById("myModalThree");
  
  // // Get the button that opens the modal
  // var btn = document.getElementById("btnOne");
  // // var btn = document.getElementById("myBtnTwo");
  // // var btn = document.getElementById("myBtnThree");
  
  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];
  
  // // When the user clicks the button, open the modal
  // btn.onclick = function () { 
  //   modal.style.display = "block";
  // };
  
  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // };
  
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
  
  // // Get the modal
  // // var modal = document.getElementById("myModal");
  // var modal = document.getElementById("myModalTwo");
  // // var modal = document.getElementById("myModalThree");
  
  // // Get the button that opens the modal
  // // var btn = document.getElementById("myBtn");
  // var btn = document.getElementById("myBtnTwo");
  // // var btn = document.getElementById("myBtnThree");
  
  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];
  
  // // When the user clicks the button, open the modal
  // btn.onclick = function () {
  //   modal.style.display = "block";
  // };
  
  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // };
  
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
  
  // // Get the modal
  // // var modal = document.getElementById("myModal");
  // // var modal = document.getElementById("myModalTwo");
  // var modal = document.getElementById("myModalThree");
  
  // // Get the button that opens the modal
  // // var btn = document.getElementById("myBtn");
  // // var btn = document.getElementById("myBtnTwo");
  // var btn = document.getElementById("myBtnThree");
  
  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];
  
  // // When the user clicks the button, open the modal
  // btn.onclick = function () {
  //   modal.style.display = "block";
  // };
  
  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // };
  
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
  
  //   $('.marquee').marquee({
  //     //speed in milliseconds of the marquee
  //     duration: 8000,
  //     //gap in pixels between the tickers
  //     gap: 50,
  //     //true or false - should the marquee be duplicated to show an effect of continues flow
  //     duplicated: true
  // });
  
  // $('.middle-marquee').marquee({
  //   //speed in milliseconds of the marquee
  //   duration: 8000,
  //   delayBeforeStart: 1,
  //   //gap in pixels between the tickers
  //   gap: 50,
  //   //true or false - should the marquee be duplicated to show an effect of continues flow
  //   duplicated: true
  // });
