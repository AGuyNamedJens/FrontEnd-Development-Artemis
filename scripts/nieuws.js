
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

function showArticle(){
    $('#showArticle img').attr("src", imgSrc);
    $('#showArticle h2').text(h2Text);
    $('#showArticle p').text(pText);
}
