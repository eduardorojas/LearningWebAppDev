var app = angular.module("SimpleApp", []);

app.controller("SimpleAppController", function($scope) {
    $scope.new_comment = "";
    
    $scope.comments = [
        "This is the first comment!",
        "Here's the second one!",
        "And this is one more.",
        "Here is another one!"
    ];
    
    $scope.addComment = function() {
        $scope.comments.push($scope.new_comment);
        $scope.new_comment = "";
    };
    //Submit code was based off the example here https://docs.angularjs.org/api/ng/directive/ngSubmit
    $scope.submit = function() {
        if ($scope.new_comment) {
            $scope.comments.push($scope.new_comment);
            $scope.new_comment = "";
        }
    };
});