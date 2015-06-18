'use strict';
app.factory('PhotoFactory', function ($http) {

    var postPhoto = function (photo, dominantColor, colors) {

    	return $http.post('/api/photo', photo).then(function(data){
            // console.log($scope.photo)
            displayPallette(dominantColor, colors);
            return data
        });
        
    }

    var displayPallette = function(dominantColor, colors){

        var color = "rgb("+dominantColor[0]+","+dominantColor[1]+","+dominantColor[2]+")";
        angular.element(dominantcolor).css("background-color", color)
        angular.element(cbone).css("background-color", colors[1])
        angular.element(cbtwo).css("background-color", colors[2])
        angular.element(cbthree).css("background-color", colors[3])
        angular.element(cbfour).css("background-color", colors[4])
        angular.element(cbfive).css("background-color", colors[5])
        angular.element(cbsix).css("background-color", colors[6])
        angular.element(cbseven).css("background-color", colors[7])

    }

    return {
        postPhoto: postPhoto, 
        displayPallette: displayPallette

    };

});


       