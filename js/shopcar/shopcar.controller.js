(function(){

     'use strict'

     function shopCarCtrl($compile,$scope,$cookies){
         
        var ctrl = this;
        ctrl.articulos =[];
        ctrl.total = 0;
        ctrl.count = 0;
        if (!angular.isUndefined($cookies.get('articulos'))) {
            ctrl.articulos =  $cookies.getObject('articulos');
            ctrl.count = ctrl.articulos.length;
            console.log(ctrl.articulos);
        }
        if(!angular.isUndefined($cookies.get('total'))){
            ctrl.total = parseFloat($cookies.get('total'));
        }

        ctrl.addToCar = function(product){
            console.log(product);

  
            if (ctrl.articulos.length === 0){
                product.count = 1;
                ctrl.articulos.push(product);
            } else {
                var repeat = false;
                for(var i = 0; i< ctrl.articulos.length; i++){
                    if(ctrl.articulos[i].ID_Info === product.ID_Info){
                        repeat = true;
                        ctrl.articulos[i].count +=1;
                    }
                }
                if (!repeat) {
                    product.count = 1;
                     ctrl.articulos.push(product);	
                }
            }
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            $cookies.putObject('articulos', ctrl.articulos,  {'expires': expireDate});
            ctrl.articulos = $cookies.getObject('articulos');    
            ctrl.total += parseFloat(product.Sale);
            $cookies.put('total', ctrl.total,  {'expires': expireDate});
            ctrl.articulos =  $cookies.getObject('articulos');
            ctrl.count = ctrl.articulos.length;
        };
        
     }

     angular
        .module('gcapp')
        .controller('shopCarCtrl', shopCarCtrl)

 }());