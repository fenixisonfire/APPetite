(function() {    
    'use strict';
    angular
        .module('appetiteApp')
        .service('homeModel', function(){
            var self = this;
            
            //SC8 - Pull today's user food manifest entries
            self.userFoodManifestToday = [{"id":"1","userid":"3","datetime":"2015-08-01 10:44:00","foodtable":"userfoodlist","foodcode":"11-594","foodname":"Bread pudding","quantity":"10","edibleproportion":"1","energy_kcal":"289","protein_g":"5.9","water_g":"30.6","carbohydrate_g":"48","fat_g":"9.5","meal":""}, {"id":"2","userid":"3","datetime":"2015-08-01 10:44:00","foodtable":"userfoodlist","foodcode":"11-641","foodname":"Chocolate cake","quantity":"1","edibleproportion":"1","energy_kcal":"464","protein_g":"7.3","water_g":"12.7","carbohydrate_g":"50.5","fat_g":"27","meal":""}];
    
            //SC9 - Pull individual's requirements manifest
            self.individualRequirements = {"id":"1","userid":"1","datetime":"2015-07-31 17:44:28","gender":"Male","weight":"100","activitylevel":"1","formulacalories":"2427","formulaprotein":"106.25","formulafluid":"3500","additionalcalories":"0","additionalprotein":"0","additionalfluid":"0","additionalactivitylevel":"0","finalcalories":"2427","finalprotein":"106.25","finalfluid":"3500"};
    });
  
}());