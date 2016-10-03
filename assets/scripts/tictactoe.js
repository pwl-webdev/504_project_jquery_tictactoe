$(document).ready(function(){
	console.log("ready");
	var board = initBoard();
	render(board);

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
});

var xMove = true;

var initBoard = function(){
	b = [[" "," "," "],[" "," "," "],[" "," "," "]];
	return b;
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