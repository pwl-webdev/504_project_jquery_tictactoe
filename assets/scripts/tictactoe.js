$(document).ready(function(){
	console.log("ready");
	var board = initBoard();
	render(board);
});

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