window.onload(){
var photoGarelly = document.getElementById('photoG').getElementsByTagName("a");
var image = document.getElementById("showImg")
var i = 0 ;
for( ; i < photoGarelly.length ; i++)
{
    photoGarelly[i].onclik = function(){
        image.setAttribute("src",photoGarelly[i].getAttribute("href"));
        return flase;
    }
}
}
