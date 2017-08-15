(function(){

     'use strict'

     function modalCtrl($http,listingService,limitToFilter){
          var ctrl = this;
          

         ctrl.showModal = function(key){
             console.log(key);
             switch (key) {
                 case 1:
                    ctrl.modalHead = "¿Qué es Games's Code?";
                    ctrl.modalBody = "<p>Gamers Code fue establecido en el 2012 en Zacatecas, México.</p>"+"<p>Iniciamos este proyecto para crear un lugar en donde pudieras intercambiar cualquiera de tus videojuegos o consolas/accesorios usadas por otro producto sin restricciones ni comisiones.</p>"+"<p>Es nuestra meta el ofrecerte el mejor precio posible al comprar o tomar en crédito tus juegos; y al mismo tiempo, queremos que tengas seguridad y confianza en nuestros productos, es por eso ofrecemos 1 año de garantía en tus compras.</p>"+"<p>Buscamos ser el lugar donde encuentres todo lo necesario para jugar los videojuegos que más te gusten, como son consolas, controles y accesorios.</p>"+"<p>En Gamers Code estamos trabajando para llevarte la más completa colección de videojuegos a precios accesibles, En nuestras tiendas podrás encontrar desde los juegos más recientes para las consolas de última generación, hasta juegos retro de las consolas que jugábamos en nuestra infancia.</p>";
                     break;
                 case 2:
                    ctrl.modalHead = "Nuestras Sucursales";
                    ctrl.modalBody = "<address><strong>Sucursal Zacatecas <br></strong>Ramon Lopez Velarde 521<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(492) 154 1226</address><address><strong>Sucursal Aguascalientes <br></strong>Avenida Madero 213-C<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(449) 918 8951</address><address><strong>Sucursal León <br></strong>Aquiles Serdan 241-C<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(477) 390 9521</address>";
                     break;
                 case 3:
                    ctrl.modalHead = "¡Contactanos!";
                    ctrl.modalBody = "<address><strong>Sucursal Zacatecas <br></strong>Ramon Lopez Velarde 521<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(492) 154 1226</address><address><strong>Sucursal Aguascalientes <br></strong>Avenida Madero 213-C<br> Colonia Centro<br><abbr title='Phone'>Tel: </abbr>(449) 918 8951</address><address><strong>Sucursal León <br></strong>Aquiles Serdan 241-C<br> Colonia Centro<br> <abbr title='Phone'>Tel: </abbr>(477) 390 9521</address>";
                     break;
                case 4:
                    ctrl.modalHead = "Venta";
                    ctrl.modalBody = "<p>En Gamers Code estamos iniciando un servicio de intercambio remoto, así que puedes intercambiar o vender tus juegos incluso si no tienes una sucursal cerca de ti. ¿Cómo funciona? Manda un email a la dirección <b>ventas@gamerscode.mx</b> con la lista de juegos, consolas y accesorios que quieres intercambiar, de preferencia incluye fotos y una descripción del estado físico, después nosotros te contestaremos con una cotización de tus productos, indicándote cuánto te ofrecemos en efectivo o en intercambio. Si estás interesado puedes enviarnos tus productos, y una vez que los chequemos y corroboremos que todo funciona bien, realizaremos el pago vía Mercado Pago o PayPal entre otros. Alternativamente, puedes listar tus productos en Mercado Libre, nos mandas un link y nosotros te los compramos, de esta manera pagamos por tus productos antes que los envíes. Ofrecemos precios competitivos en el mercado, y podemos comprar todos los productos FUNCIONANDO desde NES, SNES, Sega Genesis, hasta PS4 y Xbox One. Para comenzar o para más información favor de comunicarse a ventas@gamerscode.mx</p>";
                     break;
                 default:
                     break;
             }
              $('#modalHead').html(ctrl.modalHead);
              $('#modalBody').html(ctrl.modalBody);
            //  console.log(key);
    
         }
        
     }

     angular
        .module('gcapp')
        .controller('modalCtrl', modalCtrl)

 }());