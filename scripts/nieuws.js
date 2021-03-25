/*
    ** Get element by id of class
    document.getElementById("GIB ID")
    document.getElementsByClass("GIB CLASS")[0]

    ** onclick functie
    <element>.onclick = (() => {
        // Code hier
    }

    ** get element text
    <element>.text
*/

var pText;
var h2Text;
var imgSrc;

$('#article1').click(function(){
    pText = $('#article1 p').text();
    h2Text = $('#article1 h2').text();
    imgSrc = $('#article1 img').attr('src');
    // alert(imgSrc);
    showArticle();
})

$('#article2').click(function(){
    pText = $('#article2 p').text();
    h2Text = $('#article2 h2').text();
    imgSrc = $('#article2 img').attr('src');
    // alert(imgSrc);
    showArticle();
})

$('#article3').click(function(){
    pText = $('#article3 p').text();
    h2Text = $('#article3 h2').text();
    imgSrc = $('#article3 img').attr('src');
    // alert(imgSrc);
    showArticle();
})

$('#article4').click(function(){
    pText = $('#article4 p').text();
    h2Text = $('#article4 h2').text();
    imgSrc = $('#article4 img').attr('src');
    // alert(imgSrc);
    showArticle();
})

$('#article5').click(function(){
    pText = $('#article5 p').text();
    h2Text = $('#article5 h2').text();
    imgSrc = $('#article5 img').attr('src');
    // alert(imgSrc);
    showArticle();
})

function showArticle(){
    $('article').css("visibility","visible");
    $('article img').attr("src", imgSrc);
    $('article h2').text(h2Text);
    $('article p').text(pText);
}

var h = window.innerHeight;
var w = window.innerWidth;

$('title').text(''+w+'X'+h);
