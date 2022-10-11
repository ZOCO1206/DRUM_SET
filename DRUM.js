$(document).ready(function() {

  var padOne = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3');
  $('.pad-1').mousedown(function() {
    padOne.load()
    padOne.play();
  });

  var padTwo = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3');
  $('.pad-2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3');
  $('.pad-3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3');
  $('.pad-4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3');
  $('.pad-5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

  var padSix = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3');
  $('.pad-6').mousedown(function() {
    padSix.load();
    padSix.play();
  });

  var padSeven = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3');
  $('.pad-7').mousedown(function() {
    padSeven.load();
    padSeven.play();
  });
  
  var padEight = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3');
  $('.pad-8').mousedown(function() {
    padEight.load();
    padEight.play();
  });

  var padNine = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3');
  $('.pad-9').mousedown(function() {
    padNine.load();
    padNine.play();
  });
  
  var padTen = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3');
  $('.pad-10').mousedown(function() {
    padTen.load();
    padTen.play();
  });
  
  var padEleven = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3');
  $('.pad-11').mousedown(function() {
    padEleven.load();
    padEleven.play();
  });
  
  var padTwelve = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3');
  $('.pad-12').mousedown(function() {
    padTwelve.load();
    padTwelve.play();
  });
  
  
  $(window).keydown(function(e) {
    var code = e.keyCode;
    var kc = String.fromCharCode(e.keyCode);
    $("div[data-code='"+code+"']").addClass("active")
    console.log(code);
    
    switch(kc) {
      case "Q":
        padOne.load();
        padOne.play();
        break;
      case "W":
        padTwo.load();
        padTwo.play();
        break;
      case "E":
        padThree.load();
        padThree.play();
        break;
      case "R":
        padFour.load();
        padFour.play();
        break;
      case "A":
        padFive.load();
        padFive.play();
        break;
      case "C":
        padSix.load();
        padSix.play();
        break;
      case "D":
        padSeven.load();
        padSeven.play();
        break;
      case "F":
        padEight.load();
        padEight.play();
        break;
      case "Z":
        padNine.load();
        padNine.play();
        break;
      case "X":
        padTen.load();
        padTen.play();
        break;
      case "C":
        padEleven.load();
        padEleven.play();
        break;
      case "V":
        padTwelve.load();
        padTwelve.play();
        break;
      default:
    }
  });

  $(window).keyup(function(e) { 
    var code = e.keyCode;
    $("div[data-code='"+code+"']").removeClass("active");
  });

});