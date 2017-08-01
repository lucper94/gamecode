(function(){

     'use strict'

     function indexCtrl($http,listingService,limitToFilter){
          var ctrl = this;
            ctrl.loading=true; 
            ctrl.modalHead = "";
            ctrl.modalBody = "";
            ctrl.getPlatform = function(Kind,Platform,Type){
                 ctrl.loading=true;
                 listingService.getGames(Kind,Platform,Type)
                    .then(function(response){
                // console.log(response);
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = 'Name';
                ctrl.loading=false;
            
            })
            }
   
        
        ctrl.resize_header = function(){
            var header= $('.game-header').height()+10;
            // console.log(header);
            $('.game-banner').css('margin-top',header);
            $('.filters').css('margin-top',header);
            // console.log('entro');
        }
        $(window).resize(function(){
            ctrl.resize_header();
        });

            listingService.getGamesHome()
                .then(function(response){
                ctrl.loading = false;
                ctrl.todos = response.data;
                // console.log(ctrl.todos);
                 ctrl.resize_header();
                 ctrl.images = [
                     
                     "assets/slider/slider2.jpg",
                     "assets/slider/slider3.jpg",
                     "assets/slider/slider4.jpg",
                     "assets/slider/slider5.jpg",
                     "assets/slider/slider6.jpg"
                 ];

                //  console.log(ctrl.images);
                 ctrl.loading = false;
                //  console.log(ctrl.loading);
                
            })
            
            ctrl.getName = function(name){
                if(name.length > 25) {
                return name.substr(0, 25)+'...';
                }else{
                return name;
                } 
            }
         angular.element(document).ready(function () {
            ctrl.resize_header();
            
         });

         ctrl.showModal = function(key){
             switch (key) {
                 case 1:
                    ctrl.modalHead = "¿Qué es Games's Code?";
                    ctrl.modalBody = "<p>Gamers Code fue establecido en el 2012 en Zacatecas, México.</p>"+"<p>Iniciamos este proyecto para crear un lugar en donde pudieras intercambiar cualquiera de tus videojuegos o consolas/accesorios usadas por otro producto sin restricciones ni comisiones.</p>"+"<p>Es nuestra meta el ofrecerte el mejor precio posible al comprar o tomar en crédito tus juegos; y al mismo tiempo, queremos que tengas seguridad y confianza en nuestros productos, es por eso ofrecemos 1 año de garantía en tus compras.</p>"+"<p>Buscamos ser el lugar donde encuentres todo lo necesario para jugar los videojuegos que más te gusten, como son consolas, controles y accesorios.</p>"+"<p>En Gamers Code estamos trabajando para llevarte la más completa colección de videojuegos a precios accesibles, En nuestras tiendas podrás encontrar desde los juegos más recientes para las consolas de última generación, hasta juegos retro de las consolas que jugábamos en nuestra infancia.</p>";
                     break;
                 case 2:
                    ctrl.modalHead = "Nuestras Sucursales";
                    ctrl.modalBody = "<address><strong>Sucursal Zacatecas <br></strong>Ramon Lopez Velarde 521<br> Colonia Centro<br>abbr title='Phone'>Tel: </abbr>(492) 154 1226</address><address><strong>Sucursal Aguascalientes <br></strong>Avenida Madero 213-C<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(449) 918 8951</address><address><strong>Sucursal León <br></strong>Aquiles Serdan 241-C<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(477) 390 9521</address>";
                     break;
                 case 3:
                    ctrl.modalHead = "¡Contactanos!";
                    ctrl.modalBody = "<address><strong>Sucursal Zacatecas <br></strong>Ramon Lopez Velarde 521<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(492) 154 1226</address><address><strong>Sucursal Aguascalientes <br></strong>Avenida Madero 213-C<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(449) 918 8951</address><address><strong>Sucursal León <br></strong>Aquiles Serdan 241-C<br> Colonia Centro<br> <abbr title='Phone'>Tel: </abbr>(477) 390 9521</address>";
                     break;
                 default:
                     break;
             }
              $('#modalBody').html(ctrl.modalBody);
            //  console.log(key);
    
         }
        
     }

     angular
        .module('gcapp')
        .controller('indexCtrl', indexCtrl)

 }());