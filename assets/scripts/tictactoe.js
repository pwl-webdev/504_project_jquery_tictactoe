$(document).ready(function(){
	console.log("ready");
	var board = initBoard();
	render(board);
	start(board);
});

var xMove = true;

var reset = function(board){
	xMove = true;
	clearBoard(board);
	render(board);
	start(board);
}

var start = function(board){
	$('.cell').click(function(event){
		console.log(event);
		makeMove(event, board);
	});

	$('.cell')
		.mouseenter(function(event){
			hoverIn(event, board);
		})
		.mouseleave(function(event){
			hoverOut(event, board);
		});
}



var initBoard = function(){
	b = [[" "," "," "],[" "," "," "],[" "," "," "]];
	return b;
}
var clearBoard = function(board){
	for(var i=0; i < 3; i++){
		for(var j=0; j < 3; j++){
			board[i][j] = " ";
		}
	}
	return board;
}

var render = function(board){
	$('.container').empty();
	for(var i=0; i < 3; i++){
		for(var j=0; j < 3; j++){
			$('.container').append(`<div class="cell" id="c${j}r${i}">${board[i][j]}</div>`);
		}
	}
}
var makeMove = function(event, board){
	var pos = event.target.id.split("");
	var column = pos[1];
	var row = pos[3];
	if(b[row][column] == " "){
		if(xMove){
			b[row][column] = "X";
			xMove = false;
			$(`#${event.target.id}`).text("X");
		} else {
			b[row][column] = "O";
			xMove = true;
			$(`#${event.target.id}`).text("O");
		}
		$(`#${event.target.id}`).removeClass("fadeText");
		checkVictory(board);
	}
}
var hoverIn = function(event, board){
	var pos = event.target.id.split("");
	var column = pos[1];
	var row = pos[3];
	if(b[row][column] == " "){
		if(xMove){
			$(`#${event.target.id}`).text("X");			
		} else {
			$(`#${event.target.id}`).text("O");	
		}
		$(`#${event.target.id}`).addClass("fadeText");
	}
}
var hoverOut = function(event, board){
	var pos = event.target.id.split("");
	var column = pos[1];
	var row = pos[3];
	if(b[row][column] == " "){
		if(xMove){
			$(`#${event.target.id}`).text(" ");			
		} else {
			$(`#${event.target.id}`).text(" ");	
		}
		$(`#${event.target.id}`).removeClass("fadeText");
	}
}

var checkVictory = function(board){
	if(board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][2] != " "){
		alert(`End of Game, ${board[0][0]} won!`);
		reset(board);
	} else if(board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][2] != " "){
		alert(`End of Game, ${board[1][0]} won!`);
		reset(board);
	} else if(board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][2] != " "){
		alert(`End of Game, ${board[2][0]} won!`);
		reset(board);
	} else if(board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[2][0] != " "){
		alert(`End of Game, ${board[0][0]} won!`);
		reset(board);
	} else if(board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[2][1] != " "){
		alert(`End of Game, ${board[0][1]} won!`);
		reset(board);
	} else if(board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[2][2] != " "){
		alert(`End of Game, ${board[0][2]} won!`);
		reset(board);
	}else if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != " "){
		alert(`End of Game, ${board[0][0]} won!`);
		reset(board);
	}else if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != " "){
		alert(`End of Game, ${board[0][2]} won!`);
		reset(board);
	} else if($.inArray(" ", board[0]) == -1 && $.inArray(" ", board[1]) == -1 && $.inArray(" ", board[2]) == -1){
		alert("End of Game, It's a draw!");
		reset(board);
	}
}