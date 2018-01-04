$routeProvider
.when('/',{
    templateUrl:'login.html'
})
.when ('/dashboard',{
    templateUrl: 'dashboard.html'
})
.otherwiase({
    redirectTo:'/'
});
});

app.controller('loginCtrl',function($scope,$location)){
               $scope.submit=function(){
    var uname=$scope.username;
    var password=$scope.password;
    if ($scope.username=='admin' && $scope.password=="izzath"){
        $location.path('/dashboard');
    }
};
});