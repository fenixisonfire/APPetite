(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('loginModel', function($http, $location, authService){
            var self = this;
        
            //SC10 - Login verification
            self.pull_login = function(logindetails){      
                var pull = $http({
                    method: 'post',
                    url: 'http://appetiteBackEnd.azurewebsites.net/login.php',
                    data: {
                        password: logindetails.password,
                        nhsnumber: logindetails.nhsnumber,
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    var result = data[0].return;
                    if (result == "failure"){
                        alert("Login Failed. Check your password and 10 digit NHS Number");
                    }else{
                        authService.setUser(result);
                        $location.path('/home');
                    };
                });
            }; 
    });
  
}());