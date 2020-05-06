function loadJs() {

    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    button.onclick = function() {

    if(content.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "Show more";
    }else {
        //expand the box
        content.className = "open";
        button.innerHTML = "Show less";
    };

}

}
window.onload = function(){
     loadJs();
};
/* same with below ( below is not organized )

window.onload = function(){
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    button.onclick = function() {

    if(content.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "Show more";
    }else {
        //expand the box
        content.className = "open";
        button.innerHTML = "Show less";
    };

}

};


*/
