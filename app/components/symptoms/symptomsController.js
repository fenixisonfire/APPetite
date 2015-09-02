(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('symptomsController', function($location, $window, pullModel, pushModel) {
            var self = this;
        
            self.id = "Symptoms";
            self.submitvalue = "Submit Symptom";
            self.title = "Enter your Symptoms below";
            
            self.selected;
            self.tab;
            
            self.mmmerge = function(major, minor){
                var output = [];
                var i = 0;
                while (i < major.length){
                    output[i] = major[i];
                    i++;
                };
                for (var j = 0; j < minor.length; j++){
                    output[i] = minor[j];
                    i++;
                };
                return output;
            };
        
            var pullallsl = pullModel.pull_all_sl();
        
            var pullallusl = pullModel.pull_all_usl();  
            
        
            self.symptoms = self.mmmerge(pullallsl, pullallusl)
        
            self.selectSymptoms = function(toadd){
                console.log(toadd);
                self.selected = toadd;
                self.setTab(toadd);
            };
        
            self.setTab = function (tabId) {
                self.tab = tabId;
            };

            self.isSet = function (tabId) {
                return self.tab === tabId;
            };
        
            self.submitSymptom = function(){
                pushModel.push_usl(self.newsymptom);
                pushModel.push_usm(self.newsymptom);
                $location.path('/home');
            };
    
            self.submit = function(){
                self.symptom.symptom = self.selected;
                pushModel.push_usm(self.symptom);  
                $location.path('/home');
            };

    });
}());