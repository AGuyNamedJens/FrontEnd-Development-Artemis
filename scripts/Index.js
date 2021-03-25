let index = 0;

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

// Vars voor clearInterval
var IntervalSlideShowOut;
var IntervalSlideShowIn;

function SlideShow() {
  // De start van de loop
  SlideOut();

  function SlideIn() {
    // Clear interval van SlideIn
    clearInterval(IntervalSlideShowIn);
    setTimeout(() => {
      // Set interval (timeout wil niet werken)
      IntervalSlideShowOut = setInterval(SlideOut, 200);
    }, 4500);
  }

  function SlideOut() {
    // Fade out CSS
    document.getElementById("slideShowImg").className = "fadeOut";
    // Clear interval van SlideIn
    clearInterval(IntervalSlideShowOut);
    setTimeout(() => {
      // Set interval (timeout wil niet werken)
      IntervalSlideShowIn = setInterval(SlideIn, 200);
      // Verander image
      slideshow();
    }, 4500);
  }
}

// Timeouts voor fade effecten
window.onload = setTimeout(BTNDonateAnimation, 1500);
window.onload = setTimeout(SlideShow, 5000);

window.onresize = (() => { BTNDonateAnimation() });

let isLoaded = false;

function BTNDonateAnimation()
{ 
  if(window.innerWidth >= 1100)
  {
    if(!isLoaded) document.getElementsByClassName("desktop")[0].classList.add("fadeIn");
    else {
      document.getElementsByClassName("desktop")[0].classList.remove("fadeIn");
      document.getElementsByClassName("desktop")[0].style.opacity = '100%';
    }

    document.getElementsByClassName("desktop")[0].style.display = "flex";
    document.getElementsByClassName("mobileDevice")[0].style.display = "none";
  }

  else if(window.innerWidth <= 1100)
  {
    if(!isLoaded) document.getElementsByClassName("mobileDevice")[0].classList.add("fadeIn");
    else {
      document.getElementsByClassName("mobileDevice")[0].classList.remove("fadeIn");
      document.getElementsByClassName("mobileDevice")[0].style.opacity = '100%';
    }

    document.getElementsByClassName("mobileDevice")[0].style.display = "flex";
    document.getElementsByClassName("desktop")[0].style.display = "none";
  }

  isLoaded = true;
}

document.getElementById("#HamburgerMenu").addEventListener("mouseenter", (()=>{
  
}));
document.getElementById("#HamburgerMenu").addEventListener("mouseleave", (()=>{
  document.querySelector("nav > ul").style.display = "flex";
}));
