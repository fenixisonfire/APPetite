(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('pushModel', function($http, $location, $window, authService){
            var self = this;
            
            //SC3 - Push to userMealList
            self.push_uml = function(selected){       
                //looping through each time in given array
                for (var i = 0; i < selected.length; i++){ 
                    var push = $http({
                        method: 'post',
                        url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                        data: {
                            table: "usermeallist",
                            userid: authService.getUser(),
                            mealname: "genericmealname",
                            carbohydrate_g: selected[i].carbohydrate_g,
                            edibleproportion: selected[i].edibleproportion,
                            energy_kcal: selected[i].energy_kcal,
                            fat_g: selected[i].fat_g,
                            foodcode: selected[i].foodcode,
                            foodname: selected[i].foodname,
                            protein_g: selected[i].protein_g,
                            quantity: selected[i].quantity,
                            starch_g: selected[i].starch_g,
                            water_g: selected[i].water_g,
                        },
                        headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                    })
                    .success(function (data){
                        $window.location.reload();
                    });
                };
            };
        
            //SC4 - Push to userFoodManifest
            self.push_ufm = function(selected){
                console.log(selected);
                //looping through each item in array given over
                for (var i = 0; i < selected.length; i++){
                    var push = $http({
                        method: 'post',
                        url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                        data: {
                            table: "userfoodmanifest",
                            userid: authService.getUser(),
                            carbohydrate_g: selected[i].carbohydrate_g,
                            edibleproportion: selected[i].edibleproportion,
                            energy_kcal: selected[i].energy_kcal,
                            fat_g: selected[i].fat_g,
                            foodcode: selected[i].foodcode,
                            foodname: selected[i].foodname,
                            protein_g: selected[i].protein_g,
                            quantity: selected[i].quantity,
                            starch_g: selected[i].starch_g,
                            water_g: selected[i].water_g,
                        },
                        headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                    })
                    .success(function (data){
                        $window.location.reload();
                    });
                };    
            };
        
            //SC5 - Push to userMealList
            self.push_ufl = function(newfood){
                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "userfoodlist",
                        userid: authService.getUser(),
                        edibleproportion: newfood.edibleproportion,
                        energy_kcal: newfood.energy_kcal,
                        fat_g: newfood.fat_g,
                        foodcode: 100,
                        foodname: newfood.foodname,
                        protein_g: newfood.protein_g,
                        water_g: newfood.water_g,
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    $window.location.reload();
                });           
            };
        
            //SC13 - Log new symptom to usersymptomsList
            self.push_usl = function(newsymptom){
                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "usersymptomlist",
                        userid: authService.getUser(),
                        symptom: newsymptom.symptom, 
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    $window.location.reload();
                });
            };
            
            //SC14 - Submit current symptoms to usersymptomManifest
            self.push_usm = function(currentsymptom){

                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "usersymptommanifest",
                        userid: authService.getUser(),
                        symptom: currentsymptom.symptom,
                        comment: currentsymptom.comment,
                        symptomid: 202,
                        rating: 202,
                        
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    console.log(data);
                });
            };
        
            //SC15 - Push object to userweightmanifest
            self.push_uwm = function(currentweight){
                var push = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/push.php",
                    data: {
                        table: "userweightmanifest",
                        userid: authService.getUser(),
                        weight: currentweight.weight,
                        swollenfeet: currentweight.swollenfeet,
                        swollenlegs: currentweight.swollenlegs,
                        swollenabdomen: currentweight.swollenabdomen,
    
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    $window.location.reload();
                });
            };

            
    });
  
}());