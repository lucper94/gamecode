(function(){

     'use strict'

     function modalCtrl($http,listingService,limitToFilter){
          var ctrl = this;
          
         ctrl.sucursales = false;
         ctrl.showModal = function(key){
             console.log(key);
             switch (key) {
                 case 1:
                    ctrl.modalHead = "¿Qué es Games's Code?";
                    ctrl.modalBody = "<p>Iniciamos este proyecto para crear un lugar en donde pudieras intercambiar cualquiera de tus videojuegos o consolas/accesorios usadas por otro producto sin restricciones ni comisiones.</p>"+"<p>En Gamers Code estamos trabajando constantemente para llevarte la más completa colección de videojuegos a precios accesibles, En nuestras tiendas podrás encontrar desde los juegos y consolas retro clásicas, hasta los juegos más recientes de última generación.</p>";
                    ctrl.sucursales = false; 
                    ctrl.modalBody2 ="";
                    $('.no-sucursales').show();
                    $('.sucursales').hide();
                    break;
                 case 2:
                    ctrl.sucursales = true;
                    ctrl.modalHead = "Nuestras Sucursales";
                    ctrl.modalBody = "<address><strong>Sucursal Aguascalientes<br></strong>Avenida Madero 213-C<br> Colonia Centro <label align='right'>Horario: 10:00 Am a 20:00 pm</label><br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address><address><strong>Sucursal Aguascalientes <br></strong>Centro Comercial Villasuncion<br> Local 15b<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address><address><strong>Sucursal León <br></strong>Aquiles Serdan 241-C<br> Colonia Centro<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address><address><strong>Sucursal León <br></strong>Plaza Fundadores Local 23<br> Colonia Centro<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address><address><strong>Sucursal Zacatecas <br></strong>Ramon Lopez Velarde 521<br> Colonia Centro<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address>";
                    ctrl.modalBody2 = "<p><b> Lunes 10am - 8pm <br> Martes  10am - 8pm <br>  Miércoles  10am - 8pm <br> Jueves  10am - 8pm <br> Viernes  10am - 8pm <br> Sabado  10am - 8pm <br>  Domingo 11am - 6pm</b></p>";
                    $('.no-sucursales').hide();
                    $('.sucursales').show();
                    break;
                 case 3:
                    ctrl.sucursales = true;
                    ctrl.modalHead = "¡Contactanos!";
                    ctrl.modalBody = "<address><strong>Sucursal Aguascalientes <br></strong>Avenida Madero 213-C<br> Colonia Centro<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address><address><strong>Sucursal Aguascalientes <br></strong>Centro Comercial Villasuncion<br> Local 15b<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address><address><strong>Sucursal León <br></strong>Aquiles Serdan 241-C<br> Colonia Centro<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address><address><strong>Sucursal León <br></strong>Plaza Fundadores Local 23<br> Colonia Centro<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address><address><strong>Sucursal Zacatecas <br></strong>Ramon Lopez Velarde 521<br> Colonia Centro<br><abbr title='Phone'>Servicio al Cliente: </abbr>449 265 8602</address>";
                    ctrl.modalBody2 = "<p><b> Lunes 10am - 8pm <br> Martes  10am - 8pm <br>  Miércoles  10am - 8pm <br> Jueves  10am - 8pm <br> Viernes  10am - 8pm <br> Sabado  10am - 8pm <br>  Domingo 11am - 6pm</b></p>";
                    $('.no-sucursales').hide();
                    $('.sucursales').show();
                    break;
                case 4:
                    ctrl.sucursales = false;
                    ctrl.modalHead = "Venta";
                    ctrl.modalBody = "<p>En Gamers Code estamos iniciando un servicio de intercambio remoto, así que puedes intercambiar o vender tus juegos incluso si no tienes una sucursal cerca de ti. ¿Cómo funciona? Manda un email a la dirección <b>ventas@gamerscode.mx</b> con la lista de juegos, consolas y accesorios que quieres intercambiar, de preferencia incluye fotos y una descripción del estado físico, después nosotros te contestaremos con una cotización de tus productos, indicándote cuánto te ofrecemos en efectivo o en intercambio. Si estás interesado puedes enviarnos tus productos, y una vez que los chequemos y corroboremos que todo funciona bien, realizaremos el pago vía Mercado Pago o PayPal entre otros. Alternativamente, puedes listar tus productos en Mercado Libre, nos mandas un link y nosotros te los compramos, de esta manera pagamos por tus productos antes que los envíes. Ofrecemos precios competitivos en el mercado, y podemos comprar todos los productos FUNCIONANDO desde NES, SNES, Sega Genesis, hasta PS4 y Xbox One. Para comenzar o para más información favor de comunicarse a ventas@gamerscode.mx</p>";
                    ctrl.modalBody2 ="";
                    $('.no-sucursales').show();
                    $('.sucursales').hide();
                     break;
                 default:
                     break;
             }

              $('#modalHead').html(ctrl.modalHead);
              $('#modalHead').html(ctrl.modalHead);
              $('.modalBody').html(ctrl.modalBody);
              $('#modalBody2').html(ctrl.modalBody2);
            //  console.log(key);
    
         }
        
     }

     angular
        .module('gcapp')
        .controller('modalCtrl', modalCtrl)

 }());