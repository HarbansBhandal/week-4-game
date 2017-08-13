
var wins = 0;
var losses = 0;

var math = 0;

/**Random Number**/
var number = Math.floor((Math.random()* 120) + 19);

/**Random Crystal Power**/
var mushroom = Math.floor((Math.random()* 12) + 1);
var RedCoin = Math.floor((Math.random()* 12) + 1);
var Star = Math.floor((Math.random()* 12) + 1);
var Metalbox = Math.floor((Math.random()* 12) + 1);

var configmath = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.math').empty();
	$('.math').append(math);
	
}

var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 120) + 19);

	$('.number').empty();
	$('.number').append(number);

		mushroom = Math.floor((Math.random()* 12) + 1);
    RedCoin = Math.floor((Math.random()* 12) + 1);
    Star = Math.floor((Math.random()* 12) + 1);
    Metalbox = Math.floor((Math.random()* 12) + 1);
    configmath();
}

var config = function (){
	if (math == number) {
		wins = wins + 1;
		reset();
}
	else if(math > number){
		losses = losses + 1;
		reset();
}
	else{
		configmath();
}}

	$('.math').append(math);
	$('.number').append(number);

	$(document).ready(function(){
	$('#mushroom').click(function(){
		math = math + RedCoin;
		config();
	})
	$('#RedCoin').click(function(){
		math  = math  + mushroom;
		config();
	})
	$('#Star').click(function(){
		math  = math  + Star;
		config();
	})
	$('#Metalbox').click(function(){
		math  = math  + Metalbox;
		config();
	})
});