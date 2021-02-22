function slideshow() {
    var index = 0;
    const dataArray = new Array(
        "img/index/Slideshow/Pup.jpg",
        "img/index/Slideshow/pup2.jpg",
        "img/index/Slideshow/pup3.jpg",
        "img/index/Slideshow/Cats_Kittens_Glance_549762_2560x1440.jpg",
        "img/index/Slideshow/Pussy.jpg"
    )
    setInterval(() => {
        document.getElementById("slideShowImg").src = `${dataArray[`${index}`]}`;
        if(index < 3) index++
        else index = 0;
    }, 5000)
}

function slideInDonate() {
setInterval(fadeIn, 200); 

function fadeIn(){ 
   var body = document.getElementByClassName("doneer"); 
   opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity")) 

     if(opacity < 1){ 
            opacity=opacity+0.1; 
                    body.style.opacity = opacity 
     } 
     else{ 
         clearInterval(intervalID);  
     } 
 }
}

window.onload = slideshow;
window.onload = setTimeout(slideInDonate, 1500);