
var countElement = document.querySelector("#count1");
var countElement2 = document.querySelector("#count2");
var countElement3 = document.querySelector("#count3");

var countElements=[countElement, countElement2, countElement3];

var count=[0,0,0];

function add1(index) {
    count[index]++;
    countElements[index].innerText = count[index];
}