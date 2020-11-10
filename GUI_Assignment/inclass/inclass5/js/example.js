// ADD NEW ITEM TO END OF LIST
var elem5 = document.createElement("li");
var cream = document.createTextNode("cream");
elem5.appendChild(cream);

var parent = document.getElementById('page');
parent.appendChild(elem5);
// ADD NEW ITEM START OF LIST
var elem1 = document.createElement("li");
var kale = document.createTextNode("kale");
elem1.appendChild(kale);

var parentLi = document.getElementById('one').parentNode;
var startLi = document.getElementById('one');
parentLi.insertBefore(elem1,startLi);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var allLi = document.querySelectorAll('li');
for(var i = 0; i < allLi.length; i++){
allLi[i].className = ' cool';
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING


var count = allLi.length;
var span1 = document.createElement('span')
var text = document.createTextNode(count);
span1.appendChild(text);

var head = document.getElementsByTagName("h2")[0] ;
head.appendChild(span1);
