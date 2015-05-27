app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.loaded = true;
	var k = FlashCardsFactory;

	// $scope.answerQuestion = function (answer, flashCard) {

	// 	if (!flashCard.answered) {
	// 		answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
	// 		flashCard.answered = true;
	// 		flashCard.answeredCorrectly = answer.correct;
	// 	}
	// }

	k.getFlashCards().then(function(response){
		$scope.loaded = false;
		$scope.flashCards = response;
	});

	$scope.categories = ['MongoDB', 'Express', 'Angular', 'Node', 'Reset'];

	$scope.isClicked = null;
	$scope.getCategoryCards = function(category){
		$scope.isClicked = category;
		category = category === "Reset" ? undefined : category
	
		resetScore();
		k.getFlashCards(category).then(function(response){
			$scope.flashCards = response;
		});	
	}

	function resetScore() {
		ScoreFactory.correct = 0;
		ScoreFactory.incorrect = 0;
	}

});

app.controller('StatsController', function($scope, ScoreFactory){
    $scope.scores = ScoreFactory;
});

app.controller('NewCardController', function($scope, SubmitCard){
	$scope.newCard = {
		question: null,
		category: null, 
		answers: [
		{ text: null, correct: false },
		{ text: null, correct: false },
		{ text: null, correct: false },
		]
	}

	$scope.sendToBack = function(theCard){
		SubmitCard.sendCard(theCard);
	}
	$scope.clear = function(){
		$scope.newCardForm.$setPristine();
		$scope.newCard = {
			question: null,
			category: null, 
			answers: [
			{ text: null, correct: false },
			{ text: null, correct: false },
			{ text: null, correct: false },
			]
		};
	}
})

app.filter('cheat', function(){
	return function(answers){
		return answers.filter(function(answer){
			return answer.correct;
		});
	}
});



