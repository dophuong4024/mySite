/*
 File: /pdo@cs2:~/CSS/hw7.js
 91.461 Assignment - Homework 7: Using the jQuery UI Slider and Tab Widgets
Phuong N. Do, UMass Lowell Computer Science, phuong_do@student.uml.edu
 Copyright (c) 2020 by Phuong N.Do. All rights reserved. May be
freely copied or excerpted for educational purposes with credit to the
author.
 updated by PND on November 22th, 2020 at 10:10 PM
*/
//Description: Validator checking all error for input adding slider and tab UI

$().ready(function(){
  validator();
  defaultTableClick();
})
//Update table when moving slider or change input
function updateTable(){
  if($("form#table_form").valid() === true){
$("form#table_form").submit();
}

}
function validator(){
  $("#table_form").validate({
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
        required: " &#10060 Please enter an integer for this input field OR use the slider.",
        range:" &#10060 Please enter an integer in range [-100, 100].",
        maxlength:" &#10060 Please enter no more than 3 digits",
      },
      "max_row":{
        required: " &#10060 Please enter an integer for this input field OR use the slider.",
        range:" &#10060 Please enter an integer in range [-100, 100].",
        maxlength:" &#10060 Please enter no more than 3 digits",
      },
      "min_column":{
        required: " &#10060 Please enter an integer for this input field OR use the slider.",
        range:" &#10060 Please enter an integer in range [-100, 100].",
        maxlength:" &#10060 Please enter no more than 3 digits",
      },
      "max_column":{
        required: " &#10060 Please enter an integer for this input field OR use the slider.",
        range:" &#10060 Please enter an integer in range [-100, 100].",
        maxlength:" &#10060 Please enter no more than 3 digits",
      }, //end messages
    },
    submitHandler: function(form) {
            createTable();
            $("#create_button").show();
            $("#delete_button").show();
            $("#tabs").show();
        }
  });

};
//remove all warning when changing input value
document.getElementById('min_row').addEventListener("change",removeWarning);
document.getElementById('max_row').addEventListener("change",removeWarning);
document.getElementById('min_column').addEventListener("change",removeWarning);
document.getElementById('max_column').addEventListener("change",removeWarning);

// Logs the value when the user has released the slider
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
        product = 'x';
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
    $("#container").html(table);
    return false;
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
           var validator1 = $("#table_form").validate();
           validator1.resetForm();
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
/*------------------------------------TAB START HERE-----------------------------!*/
//Default table:
function defaultTableClick(){
  if($("form#table_form").valid() === true){
$("#table_form").submit();
$('#create_button').click();
}}
tab_Handler()

//Tab handler
function tab_Handler(){
  //get tab jQuery UI to work
  $("#tabs").tabs();

    $('#create_button').click(function(){
      var tabs_index = $('div#tabs ul li.tab').length + 1;
      var new_minR = Number(document.getElementById("min_row").value);
      var new_maxR = Number(document.getElementById("max_row").value);
      var new_minC = Number(document.getElementById("min_column").value);
      var new_maxC = Number(document.getElementById("max_column").value);
      //Tab header

      var tab_header = "Row: " + new_minR +'~' +new_maxR+ ", Column: " + new_minC +'~'+new_maxC;
        $('div#tabs ul').append('<li id ="child_tab_'+ tabs_index +'" class="tab">'
                        + '<a href="#tab-' + tabs_index + '">'
                        + tab_header
                        + '</a>'
                        + "<input type='checkbox' class='checkBox'>"
                        + "<span class='ui-icon ui-icon-close' role='presentation'></span>"
                        +'</li>');
          $( "div#tabs" ).append('<div id="tab-'
                          + tabs_index + '">'
                          + $("#container").html() + '</div>');

        console.log(tabs_index);
        $("#tabs").tabs("refresh");
        $( "#tabs" ).tabs("option", "active", -1);
    }) //End CREATE

    //Close each tab function
    $('#tabs').on("click", "span.ui-icon-close", function() {
                var panelId = $(this).closest("li").remove().attr("aria-controls");
                $("#" + panelId).remove();
                $("#tabs").tabs("refresh");
            });
    //Delete all tabs and table
    $("#reset").click(function() {
        //delete all tab button
        var num_tabs = $('div#tabs ul li.tab').length;
        $("#tabs").hide();
        while (num_tabs > 0)
         { var num_tab_decrease = num_tabs--
           console.log(num_tab_decrease);
            $("#child_tab").remove();
            $("#tab-" + num_tab_decrease).remove();
        }

    });
    //Delete checked tab
    $("#delete_button").click(function() {
      $("#tabs ul li").each(function() {
      var tabId = $(this).attr("id");
      if ($("#" + tabId + " .checkBox").prop("checked")) {
        console.log("delete" + tabId);
        var panelId = $(this).remove().attr("aria-controls");
        $("#" + panelId).remove();
        $("#tabs").tabs("refresh");
      }
    });
});


} // END TAB Handler
/*------------------------------------SLIDERS START HERE-----------------------------!*/
//Min Row Slider
$(function() {
  $("#minR_slider").slider({
    min:-100,
    max:100,
    value: 0,
    slide: function(event, ui) { //Function when sliding
      $('#min_row').val(ui.value);
      removeWarning();
      updateTable();
    }
  });
});
$("#min_row").change(function () {
  var value = this.value;
  $("#minR_slider").slider("value", parseInt(value));
  updateTable();
});
//Max Row Slider
$(function() {
  $("#maxR_slider").slider({
    min:-100,
    max:100,
    value: 10,
    slide: function(event, ui) { //Function when sliding
      $('#max_row').val(ui.value);
      removeWarning();
      updateTable();
    }
  });
});
$("#max_row").change(function () {
  var value = this.value;
  $("#maxR_slider").slider("value", parseInt(value));
  updateTable();
});

//Min Column Slider
$(function() {
  $("#minC_slider").slider({
    min:-100,
    max:100,
    value: 0,
    slide: function(event, ui) { //Function when sliding
      $('#min_column').val(ui.value);
      removeWarning();
      updateTable();
    }
  });
});
$("#min_column").change(function () {
  var value = this.value;
  $("#minC_slider").slider("value", parseInt(value));
  updateTable();
});

//Max Column Slider
$(function() {
  $("#maxC_slider").slider({
    min:-100,
    max:100,
    value: 10,
    slide: function(event, ui) { //Function when sliding
      $('#max_column').val(ui.value);
      removeWarning();
      updateTable();
    }
  });
});
$("#max_column").change(function () {
  var value = this.value;
  $("#maxC_slider").slider("value", parseInt(value));
  updateTable();
});
