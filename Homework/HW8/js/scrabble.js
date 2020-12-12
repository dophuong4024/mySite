/*
File: /pdo@cs2:~/public_html/scrabble.html
91.461 Assignment - Homework 8: Implementing a Bit of Scrabble with Drag-and-Drop
Phuong N. Do, UMass Lowell Computer Science, phuong_do@student.uml.edu
Copyright (c) 2020 by Phuong N.Do. All rights reserved. May be
freely copied or excerpted for educational purposes with credit to the
author.
updated by PND on DECEMBER 11, 2020 at 12:10 PM

Cited:
[Splice] https://www.w3schools.com/jsref/jsref_splice.asp
[Diaglog]//https://jqueryui.com/dialog/
[Random Number] https://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
[jQuery function] https://api.jquery.com/
[Learning from] http://yongcho.github.io/GUI-Programming-1/assignment9.html
[Array] https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/
*/

var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "img/Scrabble_Tiles/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "img/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "img/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;

var scrabbleBoard = {};
scrabbleBoard.drop = [];
scrabbleBoard.drop[0] = [];
scrabbleBoard.drop[0][0] = { "timesLetter": 1, "timesWord": 1, "image": "img/blank_word.jpg"};
scrabbleBoard.drop[0][1] = { "timesLetter": 1, "timesWord": 1, "image": "img/blank_word.jpg"};
scrabbleBoard.drop[0][2] = { "timesLetter": 1, "timesWord": 2, "image": "img/double_word.jpg"};
scrabbleBoard.drop[0][3] = { "timesLetter": 1, "timesWord": 1, "image": "img/blank_word.jpg"};
scrabbleBoard.drop[0][4] = { "timesLetter": 1, "timesWord": 1, "image": "img/blank_word.jpg"};
scrabbleBoard.drop[0][5] = { "timesLetter": 1, "timesWord": 1, "image": "img/blank_word.jpg"};
scrabbleBoard.drop[0][6] = { "timesLetter": 1, "timesWord": 3, "image": "img/triple_word.png"};
scrabbleBoard.drop[0][7] = { "timesLetter": 1, "timesWord": 1, "image": "img/blank_word.jpg"};


/*----------------------SET UP BOARD-----------------------------------------*/
scrabbleBoard.setUpBoard = function() {
  var row, col
  for (var col = 0; col < 8; col++) {
    var imageURL = scrabbleBoard.drop[0][col].image;
    var newSlot = $("<div class=\"boardDrop\"  id=\"" + col + "\" row=\"" + 0 + "\" col=\"" + col + "\" style=\"background-image: url(" + imageURL + ")\" />");
    $("#board").append(newSlot);
  }
}

/*-------------------------------SCORE SET UP-----------------------------------------*/
var scrabbleScore = { "totalScore": 0 };

scrabbleScore.eachWordScore = function() {
  if (!checkWord()) {
    return 0;
  }
  var timesWord = 1, wordScore = 0;
  for (var column = 0; column < 8; column++) {
    var letter = scrabbleBoard.drop[0][column].letter;
    if (letter) {
      var letterVal = scrabbleTiles[letter].value;
      wordScore = letterVal * scrabbleBoard.drop[0][column].timesLetter + wordScore;

      timesWord = scrabbleBoard.drop[0][column].timesWord*timesWord;
    }
  }

  wordScore = timesWord*wordScore;

  return wordScore;
}
/*----------------------UPDATE SCORE EACH WORD---------------------------------*/
scrabbleScore.reset = function() {
  var wordScore = scrabbleScore.eachWordScore();

  $("#word-score").html(wordScore);
  $("#total-score").html(scrabbleScore.totalScore );
}
/*----------------------UPDATE TOTAL SCORE-----------------------------------------*/
scrabbleScore.updateTotal = function() {
  var eachWordScore = scrabbleScore.eachWordScore();

  scrabbleScore.totalScore += eachWordScore;
  $("#total-score").html(scrabbleScore.totalScore);
}

/*----------------------RESET SCORE FOR NEW GAME-----------------------------------*/
scrabbleScore.resetAllScore = function() {
  scrabbleScore.totalScore = 0;
  $("#word-score").html(0);
}

/*----------------------RESET BOARD FOR NEW WORD-----------------------------------*/
scrabbleBoard.resetBoard = function() {
  $("#board img").remove();
  for (var i = 0; i < 8; i++) {
    delete scrabbleBoard.drop[0][i].tileNum;
    delete scrabbleBoard.drop[0][i].letter;
  }
}

/*----------------------GENERATE RANDOM LETERS ON "HAND"-----------------------------------*/
//Cite: https://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//get position of each "new" tile on RACK
function generateTileNumOnRack() {
  var tileNum;

  generateTileNumOnRack.id = ++generateTileNumOnRack.id || 1;
  tileNum = "tile" + generateTileNumOnRack.id.toString();

  return tileNum;
}

function generateRandomLetters(n) {
  var randomLetters = [],alphabet = [];

  for (var k in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(k)) {
      var remaining = scrabbleTiles[k]["number-remaining"];
      for (var i = 0; i < remaining; i++) {
        alphabet.push(k);}
      }
    }

    for (var i = 0; i < n; i++) {
      if (alphabet.length) {
        var index = getRandomInt(0, alphabet.length - 1);
        var randomLetter = alphabet[index];
        randomLetters.push(randomLetter);
        scrabbleTiles[randomLetter]["number-remaining"]--;
        alphabet.splice(index, 1);  // https://www.w3schools.com/jsref/jsref_splice.asp
      }
    }
    return randomLetters;
  }

  function generateNewLetterOnHand(){
    var tilesAlreadyOnRack = $("#rack img").length;
    var holder = generateRandomLetters(8 - tilesAlreadyOnRack);
    for (var i = 0; i < holder.length; i++) {
      var letter = holder[i];
      var tileImageId = generateTileNumOnRack();
      var tiles = $("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[letter]["image"] + "\" letter=\"" + letter + "\" />");
      if (letter == "_") {
        tiles.addClass("blank");
      }
      $("#rack").append(tiles);

      tiles.draggable({
        revertDuration: 500,
        revert: true, //go back if not drop in target
      });
    }
  }
  /*--------------------KEEP TRACK OF TILE LEFT----------------------------------*/
  function tileRemaining() {
    var tileLeft = 0;

    for (var i in scrabbleTiles) {
      if (scrabbleTiles.hasOwnProperty(i)) {
        tileLeft += scrabbleTiles[i]["number-remaining"];
      }
    }
    $("#tile-remaining").html(tileLeft);
    return tileLeft;
  }

  /*------------------------------BINGO--------------------------*/
  //Check if there is any tile left or not
  //If there're still tiles, let player keep going
  function Bingo(noTileLeft) {
    var submitButton = document.getElementById("submit_Bt");
    if(!noTileLeft) {
      submitButton.onclick = function(event) {
        submit();
      }
    }
    else{
      document.getElementById("msg").innerHTML = "Congrats you finish the whole game!";
      $("#msg").css({"background-color":"#E6BE8A"});
    }
  }

  /*------------------------------RESET THE WHOLE GAME--------------------------*/
  //remove images on board
  // Put back all tiles on deck
  //reset scores
  function restart() {

    scrabbleBoard.resetBoard();
    scrabbleScore.resetAllScore();

    for (var k in scrabbleTiles) {
      if (scrabbleTiles.hasOwnProperty(k)) {
        scrabbleTiles[k]["number-remaining"] = scrabbleTiles[k]["original-distribution"];
      }
    }
    submit();
  }

  /*------------------------------CHECK >2-LETTERS WORD --------------------------*/

  function checkWord() {
    var word=[], blankCount=0;

    for (var col = 0; col < 8; col++) {
      var letter = scrabbleBoard.drop[0][col].letter;
      if (typeof(letter) === "undefined") {
        word +="_";
        blankCount++
      } else {
        word += letter;
      }
    }
    $("#info-word").html(word);
    //length < 2
    if (word.length-blankCount <= 1) {
      document.getElementById("msg").innerHTML = "Please drag more letter to form a word!";
      $("#msg").css({"background-color":"red"});
      document.getElementById("submit_Bt").disabled = true;
      return false;
    }
    else{
      document.getElementById("msg").innerHTML = "Good Job! You're on a right track";
      $("#msg").css({"background-color":"lightgreen"});
      document.getElementById("submit_Bt").disabled = false;
      return word;
    }

  }
  /*------------------------------OPEN ALPHABET BOARD --------------------------*/
  //https://jqueryui.com/dialog/
  scrabbleBoard.addSlot = function(tileNum, letter, row, col) {
    var column;

    for (column = 0; column < 8; column++) {
      if (scrabbleBoard.drop[0][column].tileNum === tileNum) {
        delete scrabbleBoard.drop[0][column].tileNum;
        delete scrabbleBoard.drop[0][column].letter;
      }
    }

    scrabbleBoard.drop[0][col].letter = letter;
    scrabbleBoard.drop[0][col].tileNum = tileNum;
  }

  function openAlphabet(blankDraggable, tileNum, row, col) {
    var alphabetBoard = $("<div id='blankDialog'></div>");
    var letter, tiles;
    for (letter in scrabbleTiles) {
      if (letter != "_") {
        tiles = $("<img src='" + scrabbleTiles[letter]["image"] + "'letter='" + letter + "'>");
        tiles.click(function() {
          var newLetter = $(this).attr("letter");
          blankDraggable.attr("letter", newLetter);
          blankDraggable.attr("src", scrabbleTiles[newLetter]["image"]);
          tileNum = blankDraggable.attr("id");
          scrabbleBoard.addSlot(tileNum, newLetter, row, col);

          scrabbleScore.reset();

          alphabetBoard.dialog("close");
        });
        alphabetBoard.append(tiles);
      }
    }
    alphabetBoard.dialog();
  }
  /*------------------------------HANDLE DRAG AND DROP --------------------------*/
  //helper function for previous slot filled
  function prevSlotIsFilled(row,col){
    if (col > 0)
    {
      if(typeof(scrabbleBoard.drop[row][col-1].tileNum) !== "undefined")
      {return true;}
      else{return false;}
    }
    else {return true;}
  }

  // Make the board drop droppable.
  function dragAndDropBoard(){


    $(".boardDrop").droppable({
      accept: function(draggable) {
        var row, col;

        row = $(this).attr("row");
        col = $(this).attr("col");
        //Start from beginning and adjacent to each other
        if ( typeof(scrabbleBoard.drop[row][col].tileNum) === "undefined" ) {
          return true;
        }
        else {return false;}
      },

      drop: function(e, ui) {
        e.preventDefault();

        var letter = ui.draggable.attr("letter");
        var tileNum = ui.draggable.attr("id");
        var row = $(this).attr("row");
        var col = $(this).attr("col")

        $(ui.draggable).css("top", "");
        $(ui.draggable).css("left", "");
        $(this).append(ui.draggable);
        console.log($(this).attr("col"));
        console.log($(this).attr("class"));

        $('.boardDrop').droppable("disable");
        $(this).next().droppable("enable");

        if ($(ui.draggable).hasClass("blank")) {
          openAlphabet($(ui.draggable), tileNum, row, col);
        }
        else {
          scrabbleBoard.addSlot(tileNum, letter, row, col);
          scrabbleScore.reset();
        }
      }
    });

  }

  /*------------------------------SUBMIT --------------------------*/
  //generate new letter
  //set new word score
  function submit() {
    var i, k, tileImageId, tiles, hand;

    scrabbleScore.updateTotal();
    $("#word-score").html(0);
    scrabbleBoard.resetBoard();
    generateNewLetterOnHand()

    $("#info-word").html("");
    if (tileRemaining() == 0) {
     Bingo(true);
      document.getElementById("submit_Bt").disabled = false;
    } else {
      Bingo(false);
      document.getElementById("submit_Bt").disabled = true;
    }

    document.getElementById("msg").innerHTML = "Let's create a new word!";
    $("#msg").css({"background-color":"#E6BE8A"});

    dragAndDropBoard();
    $(".boardDrop").droppable("enable");
    //console.log("Submit()" + $(".boardDrop").attr("class"));
  }
  //Load pages
  $(window).on('load', function(){

    scrabbleBoard.setUpBoard();
    restart();
    dragAndDropBoard();

  });
