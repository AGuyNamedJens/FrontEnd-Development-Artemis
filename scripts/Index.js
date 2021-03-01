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
  document.getElementById("slideShowImg").className = "fadeIn";

  if (index < 4) index++;
  else index = 0;
}

function donateButton() {
  document.getElementsByClassName("doneer")[0].className = "doneer fadeIn";
}

var IntervalSlideShowOut;
var IntervalSlideShowIn;

function SlideShow() {
  var body = document.getElementById("slideShowImg");

  SlideOut();

  function SlideIn() {
    clearInterval(IntervalSlideShowIn);
    setTimeout(() => {
      IntervalSlideShowOut = setInterval(SlideOut, 200);
    }, 4500);
  }
  function SlideOut() {
    body.className = "fadeOut";
    clearInterval(IntervalSlideShowOut);
    setTimeout(() => {
      IntervalSlideShowIn = setInterval(SlideIn, 200);
      slideshow()
    }, 4500);

  }
}

document.getElementsByClassName("doneer")[0].style.opacity = 0;
window.onload = setTimeout(donateButton, 1500);
//window.onload = slideshow;
window.onload = setTimeout(SlideShow, 5000);
