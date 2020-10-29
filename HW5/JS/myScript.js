/*
 File: /pdo@cs2:~/JS/myScript.js
 91.461 Assignment - Homework 5: Creating an Interactive Dynamic Table
Phuong N. Do, UMass Lowell Computer Science, phuong_do@student.uml.edu
 Copyright (c) 2020 by Phuong N.Do. All rights reserved. May be
freely
 copied or excerpted for educational purposes with credit to the
author.
 updated by PND on October 26, 2020 at 12:10 PM
 Some minor code are trigger from https://www.w3schools.com/js/js_htmldom_html.asp
*/
//Function to handle error and drawtable
function errorHandle(){
  var startX = document.getElementById("min_row").value;
  var endX = document.getElementById("max_row").value;
  var startY = document.getElementById("min_column").value;
  var endY = document.getElementById("max_column").value;
  var error = 0;

  document.getElementById("info_error").innerHTML = "";
  document.getElementById("min_row_error").innerHTML ="";
  document.getElementById("max_row_error").innerHTML ="";
  document.getElementById("min_column_error").innerHTML="";
  document.getElementById("max_column_error").innerHTML ="";

//This type of Error we can't create table
if(!Number.isInteger(Number(startX)) || startX == ''){
  document.getElementById("min_row_error").innerHTML = "&#10060 Please enter an integer for this input field.";
  error++;
}
if(!Number.isInteger(Number(endX)) || endX == ''){
  document.getElementById("max_row_error").innerHTML = "&#10060 Please enter an integer for this input field.";
  error++;
}
if(!Number.isInteger(Number(startY)) || startY == ''){
  document.getElementById("min_column_error").innerHTML = "&#10060 Please enter an integer for this input field.";
  error++;
}
if(!Number.isInteger(Number(endY)) || endY == ''){
  document.getElementById("max_column_error").innerHTML = "&#10060 Please enter an integer for this input field.";
  error++;
}

//Out of Range error
if( Number(startX) > 100 || Number(startX) < -100 ){
  document.getElementById("min_row_error").innerHTML = "&#10060 Please enter an integer in range [-100, 100].";
  error++;
}
if( Number(endX) > 100 || Number(endX) < -100){
  document.getElementById("max_row_error").innerHTML = "&#10060 Please enter an integer in range [-100, 100].";
  error++;
}
if( Number(startY) > 100 || Number(startY) < -100){
  document.getElementById("min_column_error").innerHTML = "&#10060 Please enter an integer in range [-100, 100].";
  error++;
}
if(Number(endY) > 100 || Number(endY) < -100){
  document.getElementById("max_column_error").innerHTML = "&#10060 Please enter an integer in range [-100, 100].";
  error++;
}


//This type of error we can fix using condition statement
//Swapping the range of the Row or Column if there min and max value are messed up

if(!error){
if (Number.isInteger(Number(startX)) && Number.isInteger(Number(endX)) && Number(startX) > Number(endX)) {  //Row: min > max
  var temp
  temp = startX;
  startX=endX;
  endX=temp;
  document.getElementById("min_row_error").innerHTML = "&#9888 This is now the Maximum-value of the Row.";
  document.getElementById("max_row_error").innerHTML = "&#9888 This is now the Minimum-value of the Row.";
}

if (Number.isInteger(Number(startX)) && Number.isInteger(Number(endX)) && Number(startY) > Number(endY)) { //Column: min > max
  var temp
  temp = startY;
  startY=endY;
  endY=temp;
  document.getElementById("min_column_error").innerHTML = "&#9888 This is now the Minimum-value of the Column.";
  document.getElementById("max_column_error").innerHTML = "&#9888 This is now the Maximum-value of the Column.";
}

createTable(startX,endX,startY,endY);
}
}

//Fuction to create table*/
function createTable(x1,x2,y1,y2) {
  var minX = parseInt(x1);
  var maxX = parseInt(x2);
  var minY = parseInt(y1);
  var maxY = parseInt(y2);

    var product;

		var table = '<table id="newTable">';

		for (var i = minX-1; i <= maxX; i++) {
        table += '<tr>';

      for(var j = minY-1; j < maxY+1; j++) {
        if (j == minY-1 && i == minX-1) {
        product = '';
        table+= '<td id = "data-remove">' + product+'</td>';
     } else if (j == minY-1) {
        product = i;
        table+= '<td class = "table_header">' + product+'</td>';
     } else if (i == minX-1) {
        product = j;
        table+= '<td class = "table_header" >' + product+'</td>';
     } else {
        product = i * j;
        table+= '<td class = "data">' + product+'</td>';

     }

      }
      table+= '</tr>';
		}
	  table+= '</table>';
  document.getElementById('container').innerHTML = table;

  }
