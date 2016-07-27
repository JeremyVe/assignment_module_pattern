var APP = APP || {};



APP.Game = (function(Mole){

	var NUMBER_MOLES = 8;
	var RANDOM_TIMES = [200, 250, 300, 350, 400];
	var timer = 0;
	var currentMole = 0;


	var gameLoop = function() {

		setInterval(function(){
			if (timer < 0) {
				$(".show-mole").removeClass("show-mole");
				pickAMole();
			} else {
				timer -= 10;
			}
		}, 10)
	}


	var pickAMole = function() {

		currentMole = Mole.pickRandomMole();

		var time = RANDOM_TIMES[ Math.floor(Math.random() * RANDOM_TIMES.length) ];

		Mole.showMole(currentMole);
		
		timer += time + 500;
	}

	var getNumberMoles = function() {
		return NUMBER_MOLES;
	}


	var setNumberMoles = function(val) {
		return NUMBER_MOLES = val;
	}


	var init = function() {
		// create board
		Mole.createMolesArray( getNumberMoles() );
		Mole.createBoard();

		// initiate Click Listener
		Mole.startClickListener();

		// show a mole
		pickAMole();

		// start game Loop
		gameLoop();
	}

	return {
		init: init
	}



})(APP.Mole || {});