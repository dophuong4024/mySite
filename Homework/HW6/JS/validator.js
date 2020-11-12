/*
 File: /pdo@cs2:~/CSS/validator.js
 91.461 Assignment - Homework 6: Creating an Interactive Dynamic Table
Phuong N. Do, UMass Lowell Computer Science, phuong_do@student.uml.edu
 Copyright (c) 2020 by Phuong N.Do. All rights reserved. May be
freely
 copied or excerpted for educational purposes with credit to the
author.
 updated by PND on November 11th, 2020 at 10:10 PM
*/
//Description: Validator checking all error for input
$().ready(function(){
  $("#table_form").submit(function(e){
    e.preventDefault();
    createTable();
  }).validate({
    rules:{
        "min_row":
                {required: true,
                  range: [-100,100],
                  maxlength: 4,
                },
        "max_row":
                {required: true,
                  range: [-100,100],
                  maxlength: 4,
                },
        "min_column":
                {required: true,
                  range: [-100,100],
                  maxlength: 4,
                },
        "max_column":
                {required: true,
                  range: [-100,100],
                  maxlength: 4,
                },
            },
    messages:{
      "min_row":{
        required: " &#10060 Please enter an integer for this input field.",
        range:" &#10060 Please enter an integer in range [-100, 100].",
        maxlength:" &#10060 Please enter no more than 3 digits",
      },
      "max_row":{
        required: " &#10060 Please enter an integer for this input field.",
        range:" &#10060 Please enter an integer in range [-100, 100].",
        maxlength:" &#10060 Please enter no more than 3 digits",
      },
      "min_column":{
        required: " &#10060 Please enter an integer for this input field.",
        range:" &#10060 Please enter an integer in range [-100, 100].",
        maxlength:" &#10060 Please enter no more than 3 digits",
      },
      "max_column":{
        required: " &#10060 Please enter an integer for this input field.",
        range:" &#10060 Please enter an integer in range [-100, 100].",
        maxlength:" &#10060 Please enter no more than 3 digits",
      }, //end messages
    },
  });

});
//remove all warning when changing input value
document.getElementById('min_row').addEventListener("change",removeWarning);
document.getElementById('max_row').addEventListener("change",removeWarning);
document.getElementById('min_column').addEventListener("change",removeWarning);
document.getElementById('max_column').addEventListener("change",removeWarning);

function removeWarning(){
  document.getElementById("min_row_error").innerHTML = "";
  document.getElementById("max_row_error").innerHTML = "";
  document.getElementById("min_column_error").innerHTML = "";
  document.getElementById("max_column_error").innerHTML = "";
}
//Fuction to create table*/
function createTable() {
  var startX = document.getElementById("min_row").value;
  var endX = document.getElementById("max_row").value;
  var startY = document.getElementById("min_column").value;
  var endY = document.getElementById("max_column").value;



  var minX = parseInt(startX);
  var maxX = parseInt(endX);
  var minY = parseInt(startY);
  var maxY = parseInt(endY);

    var product;

		var table = '<table id="newTable">';
    //swapping if minX > maxX and raise warning
    if(minX > maxX) {
      var temp = minX;
      minX = maxX;
      maxX = temp;
      document.getElementById("min_row_error").innerHTML = "&#9888 This is now the Maximum-value of the Row.";
      document.getElementById("max_row_error").innerHTML = "&#9888 This is now the Minimum-value of the Row.";
    }

    //swapping if minY > maxY and raise warning
    if(minY > maxY) {
      var temp = minY;
      minY = maxY;
      maxY = temp;
      document.getElementById("min_column_error").innerHTML = "&#9888 This is now the Minimum-value of the Column.";
      document.getElementById("max_column_error").innerHTML = "&#9888 This is now the Maximum-value of the Column.";
    }

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
} //end createTable


//Reset Button Handler
function removeTableAndWarning(){
    document.getElementById('container').innerHTML = "";
    if (document.getElementsByTagName('span').innerHTML != ""){
      document.getElementById("min_row_error").innerHTML = "";
      document.getElementById("max_row_error").innerHTML = "";
      document.getElementById("min_column_error").innerHTML = "";
      document.getElementById("max_column_error").innerHTML = "";
   }
}

//This is when reset button is hit
$('#reset').click(function() {
           var validator = $("#table_form").validate();
           validator.resetForm();
           removeTableAndWarning();
         });
//This is invalid float handler for input
/*
  46 == "."
  101 == 'e'
*/
$("input").keypress(function(e){
            var keyCode = e.which;
            if ( keyCode==46 || keyCode==101) {
              e.preventDefault();
              }
          });
