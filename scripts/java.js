$(document).ready(function() {
	
//Button that starts and ends the game
var btn_startend = $('#start_end');
//Displays the number of turns
var turnsNum = $('#turn > span');
turnsNum.text(0);
//Displays the number of matches
var matchesNum = $('#match > span');
matchesNum.text(0);
//Displays the monster list
var monsterList = $('.monlist');
//Identifies the game board
var game_board = $('#game');
//The picture Array board (shuffled)
var monsterArray = [];
var turn = 0;
var match = 0;
var img1;
var img2;



//Gather all images and push into monsterArray
function assembleTiles() {
	for (var i = 1; i <= 10; i++) {
		if(i < 10) {
			monsterArray.push('img/monster_0' + i + '.jpg');
			monsterArray.push('img/monster_0' + i + '.jpg');
		}else{
			monsterArray.push('img/monster_' + i + '.jpg');
			monsterArray.push('img/monster_' + i + '.jpg');
		}	
	}
}

//Shuffle the array of images
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
		return array;
}



//Triggers the start and end of game
btn_startend.click(function() {
	img1 = "";
	img2 = "";
	monsterList.hide();
	$('.tile').removeClass('selected');
	$('.tile img').remove();
	turn = 0;
	turnsNum.text(0);
	match = 0;
	matchesNum.text(0);
	select = 0;
	monsterArray = [];
	$('.monlist').hide();
	//Load board game with resets
	if ($('#game').hasClass('inactive')) {
		$('#game').removeClass('inactive');
		$('.tile').show();
		$('#start_end').css("background", "url(img/retry.png) no-repeat");
		assembleTiles();
		shuffleArray(monsterArray);
		//Append the array to each tile
		$('.tile').each(function(index, element) {
			var $this = $(this);
			$('<img>').attr('src', monsterArray[index]).appendTo($this).hide();;
		});
	} else {
		$('#game').addClass('inactive');
		$('#start_end').css("background", "url(img/start.png) no-repeat");
		$('.tile img').remove();
	}
})

//Links selection to list
function showList() {
	if (img2 === "img/monster_01.jpg") {
		$('#monster01').show();
	} else if (img2 === "img/monster_02.jpg") {
		$('#monster02').show();
	}else if (img2 === "img/monster_03.jpg") {
		$('#monster03').show();
	}else if (img2 === "img/monster_04.jpg") {
		$('#monster04').show();
	}else if (img2 === "img/monster_05.jpg") {
		$('#monster05').show();
	}else if (img2 === "img/monster_06.jpg") {
		$('#monster06').show();
	}else if (img2 === "img/monster_07.jpg") {
		$('#monster07').show();
	}else if (img2 === "img/monster_08.jpg") {
		$('#monster08').show();
	}else if (img2 === "img/monster_09.jpg") {
		$('#monster09').show();
	}else if (img2 === "img/monster_10.jpg") {
		$('#monster10').show();
	}
}


$('.tile').click(function() {
	if (select == 0) {
		//Increment the select
		select++
		//Append src name to array img1
		img1 = $(this).children('img').attr("src");
		//Display the image and adds class 'selected'
		$(this).children('img').show();
		$(this).addClass('selected');
		
	}else if (select == 1 && !$(this).hasClass("selected")) {
		//Append src name to array img2
		img2 = $(this).children('img').attr("src");
		//Display the image and adds class 'selected'
		$(this).children('img').show();
		$(this).addClass('selected');
			//CONDITIONS: when an correct match has been made
			if (img1 == img2) {
				//Increment the turns
				turn++;
				turnsNum.text(turn);
				//Increment the matches
				match++;
				matchesNum.text(match);
				//reset select to 0
				select = 0;
				//Fade entire tiles
				$('.selected').delay(300).fadeOut();
				showList();
				//Game End
				if (match == 10) {
					$('#start_end').css("background", "url(img/win.png) no-repeat");
					$('#game').addClass('inactive');
				}else if (turn == 15) {
					$('#game').addClass('inactive');
				}
			//CONDITIONS: when an incorrect match has been made
			} else if (img1 != img2) {
				$('.tile img').delay(500).fadeOut();
				//Increment the turns
				turn++;
				turnsNum.text(turn);
				//reset select to 0
				select = 0;
				//removes selected class
				$('.tile').removeClass('selected');
				//Game End
				if (turn == 15) {
					$('#game').addClass('inactive');
				}
			}
		}
	
});


});