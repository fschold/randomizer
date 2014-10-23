'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:LoadncalculatechoiceCtrl
 * @description
 * # LoadncalculatechoiceCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
  .controller('LoadncalculatechoiceCtrl', function ($scope,sharedPropertiesService) {
  	
    $scope.objectsToChooseFrom = sharedPropertiesService.getObject();
    $scope.subject = sharedPropertiesService.getSubject();
    console.log("Subject is "+$scope.subject);
    var typeOfChoice = "";

    document.getElementById('results_movies').style.display = 'none';
    document.getElementById('results_persons').style.display = 'none';

    //$scope.makeCalculation();

    if(sharedPropertiesService.getNumberOfChoices() != 0) {
      typeOfChoice = "person"
      var choices = sharedPropertiesService.getNumberOfChoices(); 
      makeCalculation(choices,typeOfChoice);
    } else {
      typeOfChoice = "movie";
      makeCalculation(1,typeOfChoice);
    } 

    console.log("type is "+typeOfChoice);


    function makeCalculation(numberOfChoices, type) {
      console.log("type is "+type);

        // Add spinner
      	var target = document.getElementById('spinner');
      	var spinner = new Spinner().spin();
    	  target.appendChild(spinner.el);

      	var numberOfObjects = $scope.objectsToChooseFrom.length;

        if(type == "movie") {
          var randomChooseObject = Math.floor((Math.random() * numberOfObjects) + 1);
          $scope.movieTitle = $scope.objectsToChooseFrom[randomChooseObject-1];
        } else {
          $scope.results = [];
          $scope.chosenNumbers = [];
          var randomChooseObject;

          console.log("number of is "+numberOfChoices);

          for (var i = 0; i < numberOfChoices; i++) {

            randomChooseObject = Math.floor((Math.random() * numberOfObjects) + 1);
            //console.log("before "+randomChooseObject);

            // Values should be unique
            while($scope.chosenNumbers.indexOf(randomChooseObject) != -1) {
              randomChooseObject = Math.floor((Math.random() * numberOfObjects) + 1);
              //console.log("while "+randomChooseObject);
            }
            //console.log("ramdomchoose is "+randomChooseObject);
            $scope.chosenNumbers[i] = randomChooseObject;
            $scope.results[i]=$scope.objectsToChooseFrom[randomChooseObject-1];

          };
          console.log($scope.results);
          console.log($scope.chosenNumbers);
        }

      	var wait = setTimeout(function(){spinner.stop(); $scope.displayResults(typeOfChoice);}, 3000);


    };

  	$scope.displayResults = function(typeOfChoice) {

  		// Hide loading area
  		document.getElementById('loading_area').style.display = 'none';

      if(typeOfChoice == "movie") {
  		    //Show result area
  		    document.getElementById('results_movies').style.display = 'block';
      } else if(typeOfChoice == "person") {
           document.getElementById('results_persons').style.display = 'block';
      }
  	};
    
  });
