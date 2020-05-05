// each elements in DOM has loads of events
//on~ 으로 시작하는 것 대부분 , onclick, onmouseover..etc
/* html example
...
<div class = "content">
<h2 id ="pageTitle"> yechubot </h2>
...
</div>
*/
var title = document.getElementById("pageTitle");
title.onclick = function() {
    alert("you clicked me ");
};

title.onmouseover = function() {
    alert("you hovered your mose over me");
};

