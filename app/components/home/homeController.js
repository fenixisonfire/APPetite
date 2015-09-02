(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('homeController', function($scope, $window, pullModel) {
            var self = this;
        
            self.id = "Home";
        
            self.items = pullModel.pull_today_ufm();
        
            self.todayCalories = 0;
            self.todayProtein = 0;
            self.todayFluid = 0;
        
        
            self.processData = function(){
            
                for(var i = 0; i < self.items.length; i++){
                    //For calculating totals for table

                    var multical = self.items[i].energy_kcal * self.items[i].quantity;          
                    self.todayCalories = self.todayCalories + multical;
                    

                    var multipro = self.items[i].protein_g * self.items[i].quantity;     
                    self.todayProtein = self.todayProtein + multipro;
                    

                    var multiflu = self.items[i].water_g * self.items[i].quantity;
                    self.todayFluid = self.todayFluid + multiflu;
                    
                }; 
            };
        
            self.processData();
        
            self.percentCalculate = function(){
                var reccomendCal = 2000; 
                    //pullModel.pull_all_urm();
                self.caloriesPercent = Math.round((self.todayCalories / reccomendCal) * 100);
                
                //TODO INPUT RECCOMENDED 
                var reccomendPro = 106;
                self.proteinPercent = Math.round((self.todayProtein / reccomendPro) * 100);

                var reccomendFlu = 300;
                self.fluidPercent = Math.round((self.todayFluid / reccomendFlu) * 100);
            };  
            self.percentCalculate();
        
            self.caloriesdata = [
                {label: "Calories", value: self.caloriesPercent, suffix: "%", color: "#00CC99"}
            ];
             self.proteindata = [
                {label: "Protein", value: self.proteinPercent, suffix: "%", color: "#FF66FF"}
            ];
             self.fluiddata = [
                {label: "Fluid", value: self.fluidPercent, suffix: "%", color: "#FF9900"}
            ];
        
            self.gauge_options = {thickness: 15, mode: "gauge", total: 100};
            
    });
}());