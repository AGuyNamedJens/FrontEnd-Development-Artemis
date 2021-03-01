var index = 0;

function slideshow() {
  const dataArray = new Array(
    "img/index/Slideshow/Pup.jpg",
    "img/index/Slideshow/pup2.jpg",
    "img/index/Slideshow/pup3.jpg",
    "img/index/Slideshow/Cats_Kittens_Glance_549762_2560x1440.jpg",
    "img/index/Slideshow/Pussy.jpg"
  );
  document.getElementById("slideShowImg").src = `${dataArray[`${index}`]}`;
  if (index < 4) index++;
  else index = 0;
}

var IntervalDonate;

function slideInDonate() {
  // aparte functie want een interval in een timeout wil niet werken
  IntervalDonate = setInterval(fadeInDonate, 200);
}

function fadeInDonate() {
  var body = document.getElementsByClassName("doneer");
  var opacity = Number(
    document.getElementsByClassName("doneer")[0].style.opacity
  );

  if (opacity < 1) {
    opacity += 0.1;
    body[0].style.opacity = opacity;
  } else {
    clearInterval(IntervalDonate);
  }
}

var IntervalSlideShowOut;
var IntervalSlideShowIn;

function SlideShow() {
  // aparte functie want een interval in een timeout wil niet werken
  IntervalSlideShowOut = setInterval(fadeOutSlideShow, 200);
}

function fadeOutSlideShow() {
  var body = document.getElementById("slideShowImg");
  var opacity = Number(document.getElementById("slideShowImg").style.opacity);

  if (opacity > 0.2) {
    opacity -= 0.1;
    body.style.opacity = opacity;
  } else {
    IntervalSlideShowIn = setInterval(fadeInSlideShow, 200);
    slideshow();
    clearInterval(IntervalSlideShowOut);
  }
}

function fadeInSlideShow() {
  var body = document.getElementById("slideShowImg");
  var opacity = Number(document.getElementById("slideShowImg").style.opacity);

  if (opacity < 1) {
    opacity += 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(IntervalSlideShowIn);
    setTimeout(() => {
        IntervalSlideShowOut = setInterval(fadeOutSlideShow, 200);
    }, 5000)
  }
}

document.getElementsByClassName("doneer")[0].style.opacity = 0;
window.onload = setTimeout(slideInDonate, 1500);
//window.onload = slideshow;
window.onload = setTimeout(SlideShow, 5000);