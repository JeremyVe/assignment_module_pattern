var APP = APP || {};

APP.Mole = (function($) {
	var moleLife = 100;
	var moles = [];
	var score = 0;



	var CreateMole = function() {
		this.id = moles.length;
	}


	var createMolesArray = function(num) {
		for (var i = 0; i < num; i++) {
			var mole = new CreateMole();
			moles.push(mole);
		}
	}


	var createBoard = function() {
		var row = moles.length;

		var board = $("<div>")
				  .addClass("board");

		for (var i = 0; i < row; i++) {
			var hole = $("<div>")
						 .addClass("mole")
						 .attr("data", i);
			hole.appendTo(board);
		}
		board.appendTo($("#game"));
	}


	var startClickListener = function() {
		$(".board").on("click", ".mole", function(event) {
			if ($(event.target).hasClass("show-mole")) {

				$(event.target).removeClass("show-mole");

				score++;
				$(".score").html(score);
			}
		})
	}


	var pickRandomMole = function() {
		var randMole = Math.floor(Math.random() * moles.length);

		var mole = moles[randMole];

		return mole;
	}


	var showMole = function(mole) {
		$(".mole[data=" + mole.id + "]").addClass("show-mole");
	}


	var hideMole = function(mole) {
		$(".mole[data=" + mole.id + "]").removeClass("show-mole");
	}


	return {
		createMolesArray: createMolesArray,
		createBoard: createBoard,
		showMole: showMole,
		pickRandomMole: pickRandomMole,
		startClickListener: startClickListener
	}

})(jQuery);