app.factory('FlashCardsFactory', function($http){
    return {
        getFlashCards: function(category){
            var obj = {category: category};
            if(category){
               return $http.get('/cards', {params: obj}).then(function(response){
                    return response.data;
                }); 
            } else {
                return $http.get('/cards').then(function(response){
                    return response.data;
                });
            } 
            return {loader: true}   
        }
    };
});

app.factory('ScoreFactory', function(){
    return {
        correct: 0,
        incorrect: 0
    };
});

app.factory('SubmitCard', function($http){
    return{
        sendCard: function(card){
            console.log('HELLO', card);
            return $http.post('/cards', {params: card}).then(function(res){
                return res;
            });
        }
    }
})
// dark blue : 46575f
// light tan : d9aa72
// dark tan: a2794d
// shadow grey: dad2c7
// white: fefefc
// main background: cac3bd