window.onload = setTimeout(BTNDonateAnimation, 1500);

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

//PageTitle


document.getElementById("NavMenu").onclick = (() => {
    document.getElementById("PageTitle").style.display = "none";
});