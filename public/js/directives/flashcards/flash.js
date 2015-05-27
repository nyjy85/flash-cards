app.directive('flashCard', function(ScoreFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flashcards/flash.html',
		scope: {
			card: '=' // the directive template loses scope of $scope because of this
		},
		// controller: 'MainController',
		link: function(scope, element, attr){
			scope.answerQuestion = function (answer, flashCard) {
				if (!flashCard.answered) {
					answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
					flashCard.answered = true;
					flashCard.answeredCorrectly = answer.correct;
				}
			}
			//scope.rope = "joane"
		}
	};
});

app.directive('borderOnHover', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
			element.on('mouseenter', function(){
				element.css("border", "black 2px solid")
			}).on('mouseleave', function(){
				element.css("border", "1px solid black")
			});
		}
	};
});

// app.directive('flipOnClick', function(){
// 	return{
// 		restrict: 'A',
// 		link: function(scope, element, attr){
// 			element.on('click', function(){
// 				element.
// 			})
// 		}
// 	}
// })