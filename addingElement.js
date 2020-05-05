//parctice for adding Element..

/* example code below...

var newLi = document.createElement("li");
var newA = document.createElement("a");
var menu =document.getElementById("main-nav").getElementsByTagName("ul")[0];
menu.append(newLi);
newLi.appendChild(newA);
newA.innerHTML ="Blog";

menu.insertBefore(newLi,menu.getElementsByTagName(li)[0]); */

//adding one list
const list = document.createElement("li");
const menu = document.getElementById("main").getElementsByTagName("ul")[0];
menu.appendChild(list);
list.innerHTML ="adding Element practice list 5";

//removing the list
const parent = document.getElementById("main").getElementsByTagName("ul")[0];
const child1 = parent.getElementsByTagName("li")[0];

const remove = parent.removeChild(child1);
//parent.appendChild(remove)-to add again