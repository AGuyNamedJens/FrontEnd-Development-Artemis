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

var opacity=0; 
var intervalID=0; 

function slideInDonate() {
setInterval(fadeIn, 200); 

function fadeIn(){ 
   var body = document.getElementsByClassName("doneer"); 
   opacity = Number(document.getElementsByClassName("doneer")[0].style.opacity);

        if(opacity < 1){ 
            opacity += 0.1; 
            body[0].style.opacity = opacity 
        } 
        else{ 
            clearInterval(intervalID);  
        } 
    }  
}

document.getElementsByClassName("doneer")[0].style.opacity = 0;
window.onload = setTimeout(slideInDonate, 1500);
window.onload = slideshow;
