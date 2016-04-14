(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('weightController', function($location, $window, pullModel, pushModel) {
            var self = this; 
            self.id = "Weight";
            
            self.submitvalue = "Submit Weight";
            self.title = "Entering your weight on a weekly basis is recommended";
        
            self.weight = pullModel.pull_recent_uwm();
        
            self.symptoms = [{ 
                "symptom": "Swollen Legs",
              },
              {
                "symptom": "Swollen Feet",
              },
              {
                "symptom": "Swollen Abdomen",
              }
            ];
        
        
            self.setTab = function (tabId) {
                self.tab = tabId;
            };

            self.isSet = function (tabId) {
                return self.tab === tabId;
            };
        
             self.selectSymptoms = function(toadd){
                console.log(toadd);
                self.setTab(toadd);
                
            };
        
            self.submit = function(){
                if (self.tab == "Swollen Legs"){
                    self.symptom.swollenlegs = 1;
                    };
                if (self.tab == "Swollen Feet"){
                    self.symptom.swollenfeet = 1; 
                    };
                if (self.tab == "Swollen Abdomen"){
                    self.symptom.swollenabdomen = 1;
                    };
                pushModel.push_uwm(self.symptom);
                $location.path('/home');;
                $window.location.reload();
            }
    });
}());

