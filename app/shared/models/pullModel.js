(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('pullModel', function($http, authService){
            var self = this;
            
            //Null variables for later filling in 
            var foodlist = null;
            var umeallist = null;
            var recentweight = null;
            var ufoodman = null;
            var todayufm = null;
            var ureqman = null;
            var symplist = null;
            var ufoodlist = null;
            var usymplist = null;
            var firstweight = null;
            var usymptom = null;
            var weightlist = null;
        
            //Promises for each Server Call
        
            //Promise for SC1 - Pull all foodlist 
            var flpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "foodlist",
                        type: "all",
                        userID: ""
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    foodlist = data; 
                });
            
            //Promise for SC2 - Pull all usermeallist
            var umlpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "usermeallist",
                        type: "all",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    umeallist = data; 
                });
        
            //Promise for SC6 - Pull recent weight from userweightmanifest
            var ruwmpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userweightmanifest",
                        type: "recent",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    recentweight = data; 
                });
        
            //SC7 - Pull all from userfoodmanifest
            var ufmpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userfoodmanifest",
                        type: "all",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    ufoodman = data; 
                });        
        
            //SC8 - Pull today's user food manifest entries
            var tufmpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userfoodmanifest",
                        type: "today",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    todayufm = data; 
                });  
        
            //SC9 - Pull all from userrequirements
            var urmpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userrequirementsmanifest",
                        type: "all",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    ureqman = data; 
                });  
        
            //Promise for SC12 = Pull all symptomslist
            var slpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "symptomlist",
                        type: "all",
                        userID: ""
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    symplist = data; 
                });
        
            //Promise for SC16 - Pull all userfoodlist
            var uflpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userfoodlist",
                        type: "all",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    ufoodlist = data; 
                });
        
            //SC17 - Pull all from usersymptomlist
             var uslpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "usersymptomlist",
                        type: "all",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    usymplist = data; 
                });
        
            //Promise for SC18 - Pull earliest weight from userweightmanifest
            var fuwmpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userweightmanifest",
                        type: "first",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    firstweight = data; 
                });
        
            //SC19 - Pull all from usersymptomsmanifest
            var usmpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "usersymptommanifest",
                        type: "all",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    usymptom = data; 
                });  
        
            //Promise for SC20 - Pull all weights from userweightmanifest
            var uwmpromise = $http({
                    method: 'post',
                    url: "http://appetiteBackEnd.azurewebsites.net/pull.php",
                    data: {
                        table: "userweightmanifest",
                        type: "all",
                        userID: authService.getUser()
                    },
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
                })
                .success(function (data){
                    weightlist = data; 
                });
            
        
            //Returning value
            return {
                flpromise: flpromise,
                umlpromise: umlpromise,
                ruwmpromise: ruwmpromise,
                ufmpromise: ufmpromise,
                tufmpromise: tufmpromise,
                urmpromise: urmpromise,
                slpromise: slpromise,
                uflpromise: uflpromise,
                uslpromise: uslpromise,
                fuwmpromise: fuwmpromise,
                usmpromise: usmpromise,
                uwmpromise: uwmpromise,
                
                setData: function(data){
                    foodlist = data;
                    userfoodlist = data;
                    usermeallist = data;
                    currentweight = data;
                    firstweight = data;
                    userfoodmanifest = data;
                    userrequirements = data;
                    usersymptomsmanifest = data;
                    userfoodmanifesttodaypromise = data;
                },
            
                pull_all_fl: function() {
                    return foodlist;
                },
                
                pull_all_uml: function() {
                    return umeallist;
                },
                
                pull_recent_uwm: function() {
                    return recentweight;
                },
                
                pull_all_ufm: function(){
                    return ufoodman;
                },
                
                pull_today_ufm: function(){
                    return todayufm;
                },
                
                pull_all_urm: function(){
                    return ureqman;
                },
                
                pull_all_sl: function(){
                    return symplist;
                },
                
                pull_all_ufl: function(){
                    return ufoodlist;
                },
                
                pull_all_usl: function(){
                    return usymplist;
                },
                    
                pull_first_uwm: function(){
                    return firstweight;
                },
                    
                pull_all_usm: function(){
                    return usymptom;
                },
                
                pull_all_uwm: function(){
                    return weightlist;
                },
                    
            };   
            
    });
  
}());