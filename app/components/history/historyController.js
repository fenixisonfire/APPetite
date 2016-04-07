(function() {
    'use strict';
    angular
        .module('appetiteApp')   
        .controller('historyController', function(pullModel) {
            var self = this;
        
            self.id = "History";
        
            self.tab = 'graph';
            //graph, table, summary
            self.select = 'calories';
            //calories, protein, fluid, weight
        
            self.graphdata = [];
            
            var recentuwm = pullModel.pull_recent_uwm();
            if (recentuwm.length == 0){
                self.weight = 0;
            }else{
                self.weight = recentuwm[0].weight;
            };
        
            var firstuwm = pullModel.pull_first_uwm();
            if (firstuwm.length == 0){
                self.earliestwieght = 0;
            }else{
                self.earliestweight = firstuwm[0].weight;
            };
            
            self.userrequirements = pullModel.pull_all_urm();
            
            self.usersymptommanifest = pullModel.pull_all_usm();
            
            self.items = pullModel.pull_all_ufm();
        
            self.weights = pullModel.pull_all_uwm();  
            if (self.weights == null){
                self.weights = 0;
            };
        
            self.setTab = function (tabId) {
                self.tab = tabId;
            };

            self.isSet = function (tabId) {
                return self.tab === tabId;
            };
    
        
            self.caloriesoptions = {
              axes: {
                  x: {key: 'x', type: 'date'},
                  //x: {key: 'x', ticksFormat: '.2f', type: 'linear'},
                  y: {type: 'linear', min: 0, max: 700},
              },
              margin: {
                  right: 100
              },
              series: [
                  {y: 'caloriesval', color: '#00CC99', axis:'y0', thickness: '2px', type: 'area',  label: 'Calories'}
              ],
                  lineMode: 'linear',
                  tension: 0.7,
                  drawLegend: true,
                  drawDots: true,
                  hideOverflow: false,
                  columnsHGap: 5
            };
        
            self.proteinoptions = {
              axes: {
                  x: {key: 'x', ticksFormat: '.2f', type: 'linear'},
                  y: {type: 'linear', min: 0, max: 30},
              },
              margin: {
                  right: 100
              },
              series: [
                  {y: 'proteinval', color: '#FF66FF', axis:'y0', thickness: '2px', type: 'area', label: 'Protein'}
              ],
                  lineMode: 'linear',
                  tension: 0.7,
                  drawLegend: true,
                  drawDots: true,
                  hideOverflow: false,
                  columnsHGap: 5
            };
        
            self.fluidoptions = {
              axes: {
                  x: {key: 'x', ticksFormat: '.2f', type: 'linear'},
                  y: {type: 'linear', min: 0, max: 100},
              },
              margin: {
                  right: 100
              },
              series: [
                  {y: 'fluidval', color: '#FF9900', axis:'y0', thickness: '2px', type: 'area', label: 'Fluid'}
              ],
                  lineMode: 'linear',
                  tension: 0.7,
                  drawLegend: true,
                  drawDots: true,
                  hideOverflow: false,
                  columnsHGap: 5
            };
            
            self.weightoptions = {
              axes: {
                  x: {key: 'x', ticksFormat: '.2f', type: 'linear'},
                  y: {type: 'linear', min: 0, max: 400},
              },
              margin: {
                  right: 100
              },
              series: [
                  {y: 'weightval', color: '#3399FF', axis:'y0', thickness: '2px', type: 'area', label: 'Weight'}
              ],
                  lineMode: 'linear',
                  tension: 0.7,
                  drawLegend: true,
                  drawDots: true,
                  hideOverflow: false,
                  columnsHGap: 5
            };
        
        
        
        self.processData = function(){
            
            for(var i = 0; i < self.items.length; i++){
                
                //For calculating totals for table
                
                var multical = self.items[i].energy_kcal * self.items[i].quantity;          
                self.items[i].total_calories = multical;
                
                var multipro = self.items[i].protein_g * self.items[i].quantity;     
                self.items[i].total_protein = multipro;
                
                var multiflu = self.items[i].water_g * self.items[i].quantity;
                self.items[i].total_fluid = multiflu;
                
                //Major issue with this - Weights need to be mapped to dates and then pumped out 
                
                var multiweight = 0;
                
                if (self.weights[i] != undefined){
                    var multiweigh = self.weights[i].weight;
                };
                
                //for inserting values into graph
                console.log(self.items[i]);
               var datetime = new Date();
                
                //var datetime = i;
                //self.items[i].datetime
                
                var graphdataobject = {x: datetime, caloriesval: multical, proteinval: multipro, fluidval: multiflu, weightval: multiweigh};
                self.graphdata.push(graphdataobject);
            }; 
 
        };
        
        self.processData();

    });
}());
