var $startend = $('#start_end');
var $tile = $('.tile');
var $turnsNum = $('#turn > span');
var $matchNum = $('#match > span');
var $monsterList = $('.monlist');
var $game = $('#game');


//Resets the game to defaults
function reset() {
	$monsterList.hide();
	$turnsNum.text(0);
	$matchNum.text(0);
	
	
	// Array for the images
	var monsterImg = [];
	for(var i = 1; i <= 10; i++) {
		if(i < 10) {
			monsterImg.push('img/monster_0' + i + '.jpg');
			monsterImg.push('img/monster_0' + i + '.jpg');
		}else{
			monsterImg.push('img/monster_' + i + '.jpg');
			monsterImg.push('img/monster_' + i + '.jpg');
		}	
	}

	//Shuffle array after being added (Fisher Yates Algorithm)
	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
			return array;
	};
	shuffleArray(monsterImg);
	console.log(monsterImg);
};


$startend.click(function() {
	if ($game.hasClass('inactive')) {
		$game.fadeIn(1000).removeClass('inactive');
		$game.addClass('active');
		$startend.css("background", "url(img/retry.png) no-repeat");
		reset();
	}else if ($game.hasClass('active')) {
		reset();
	} else {
		$game.addClass('inactive');
	};
});


function game() {
	if ($game.hasClass('active')) {
		$('.tile').click(function() {
			$('body').css("background", "red");
		});
	}
};



game();










/*
var $monster = $('#matches > div')
var $gameBox = $('#game'); 


var $mon1 = $('#monster01');
var $mon2 = $('#monster02');
var $mon3 = $('#monster03');
var $mon4 = $('#monster04');
var $mon5 = $('#monster05');
var $mon6 = $('#monster06');
var $mon7 = $('#monster07');
var $mon8 = $('#monster08');
var $mon9 = $('#monster09');
var $mon10 = $('#monster10');

//Hides the list of matches
$monster.hide();


//This section initializes the game and cancels
$startend.click(function() {
	if ($gameBox.hasClass('inactive')) {
		$gameBox.fadeIn(1000).removeClass('inactive');
		MatchingGame.init();
	}else{
		$gameBox.addClass('inactive').css('display', "none");
		$startend.css("background", "url(img/start.png) no-repeat");
		$turnsNum.css("color", "transparent");
		$matchNum.css("color", "transparent");
		}
	}
);



//This section is for switching the individual tiles
$gameTile.click(function(){
	var $this = $(this);
	MatchingGame.gameTurn(this);
	}
);

//This section is the matching game OBJECT
var MatchingGame = {


	//OBJECT 1: This section will setup/reset the game
	init: function() {
		
		//Resets
		count_turn = 0;
		count_select = 0;
		count_match = 0;
		$turnsNum.text(0);
		$matchNum.text(0);
		$gameTile.removeAttr('style');
		$gameTile.children('img').remove();

		,
	
	
	//OBJECT 2: This section will begin and end the game
	gameTurn: function() {
		var $this = $(this);
		var currentImg;
		var prevImg;
		count_select++;
		
		 
		currentImg = $this.children('img').attr('src');
		if(!$this.children('img').hasClass('selected')) {
			if(!$this.children('img').hasClass('matched')) {
				
				//When the first selection has been made
				if(count_select < 2) {
					$this.css('background', "none");
					$this.children('img').show().addClass('selected');
					prevImg = currentImg;
				//When the second selection has been made (matched)
				}else if (count_select === 2){
					if(currentImg === prevImg) {
						$('img[src="' + currentImg + '"]').removeClass('selected').addClass('matched');
						$this.css('background' , 'none')
						$this.children('img').show()
						count_turn++;
						$turnsNum.text(count_turn);
						count_match++;
						$matchNum.text(count_match);
						$('.matched').fadeOut(1000);
						if(currentImg === $mon1) {
							$('#monster01').fadeIn(700);
						}else if (currentImg === $mon2) {
							$('#monster02').fadeIn(700);
						}else if (currentImg === $mon3) {
							$('#monster03').fadeIn(700);
						}else if (currentImg === $mon4) {
							$('#monster04').fadeIn(700);
						}else if (currentImg === $mon5) {
							$('#monster05').fadeIn(700);
						}else if (currentImg === $mon6) {
							$('#monster06').fadeIn(700);
						}else if (currentImg === $mon7) {
							$('#monster07').fadeIn(700);
						}else if (currentImg === $mon8) {
							$('#monster08').fadeIn(700);
						}else if (currentImg === $mon9) {
							$('#monster09').fadeIn(700);
						}else if (currentImg === $mon10) {
							$('#monster10').fadeIn(700);
						}
					//When the second selection has been made (ALL matched)
					if($matchNum === 10){
						$startend.css("background", "url(img/win.png)")
						return;
					}
					count_select = 0;
				}else {
					//When not all matches made but 2 choice have been made
					$this.css('background' , 'none');
					$this.children('img').show().addClass('selected');
					count_turn++;
					$turnsNum.text(count_turn);
					setTimeout(function(){
					$gameTiles.children('.selected')
							  .removeClass('selected')
							  .hide()
							  .parent()
							  .removeAttr('style');
					prevImg = currentImg;
					count_turn = 0;
					}, 750 );
				};
			};
		}else {
			count_turn = 0;
		};
	}else {
		count_turn = 1;
	};
	
	}
	
};

*/

