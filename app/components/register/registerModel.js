(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('registerModel', function($http, $location){
            var self = this;
            
            self.result;
        
            //SC11 - Register model
            self.push_register = function(registerdetails){      
                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/registration.php",
                    data: {
                        table: "users",
                        group: 0,
                        password: registerdetails.password,
                        nhsnumber: registerdetails.nhsnumber,
                        dateofbirth: registerdetails.dateofbirth,
                        gender: registerdetails.gender,
                        activitylevel: registerdetails.activitylevel,
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    var result = data[0].return;
                    if (result == "failure"){
                        alert("Registration Failed. Check your details; Your NHS number may already have an account");
                    }else{
                        alert("Account created!");
                        $location.path("/");
                    };
                    
                });
            };     
        });
    }());

