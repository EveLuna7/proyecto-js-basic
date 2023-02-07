// v1
/* 
 let wantToBuy = '';
    let buyAgain = '';
    wantToBuy = prompt('¿Quieres comprar un boleto? yes/no');
    if (wantToBuy == 'yes') {
        do {
            alert('¡Comencemos!');
            // datos del boleto y comprador
            let name = prompt('Ingresa tu nombre:');
            let cost = prompt('Ingresa el costo de tu boleto:');
            showData(cost);
            let costOnTreeMonths = cost / 3;
            let costOnSixMonths = cost / 6;
            alert('Con pago a meses, te quedaria en:  3 meses = ' + Math.round(costOnTreeMonths) + ' o 6 meses = ' + Math.round(costOnSixMonths));
            let monthsToPay = prompt('Seleccione los meses a pagar: (3) o (6):');
            alert(name + ' has comprado un boleto a ' + monthsToPay + ' mensualidades de ' + cost / monthsToPay + ' y un costo total de $' + cost);
            buyAgain = prompt('Comprar otro boleto?? yes/no');
        } while (buyAgain == 'yes');
    }
    alert('¡Adios!');

    function showData(data){
        console.log(data);
    }
*/

//v2

// Constuctor
class EventoMusical {
    constructor(nombre, fecha, costo, lugar, ciudad){
        this.nombre = nombre;
        this.fecha = fecha;
        this.costo = costo;
        this.lugar = lugar;
        this.ciudad = ciudad;
    }
}

// Array para almacenar 
const eventosMusicales = [] ; 

// Arrays de eventos musicales existentes
eventosMusicales.push (new EventoMusical ("Metallica", "11 de Febrero 2023", 3000, "Foro Sol", "Ciudad de México"));
eventosMusicales.push (new EventoMusical ("Guns N' Roses", "25 de Abril 2023", 1200, "Palacio de los Deportes", "Puebla"));
eventosMusicales.push (new EventoMusical ("The Cranberries", "18 de Septiembre 2023", 2800, "Autodromo", "Guadalajara"));
eventosMusicales.push (new EventoMusical ("Linkin Park", "21 de Enero 2024", 1600, "Auditorio Nacional", "Monterrey"));
eventosMusicales.push (new EventoMusical ("Foo Fighters", "8 de Diciembre 2024", 3300, "Foro Sol", "Ciudad de México"));

// console.log(eventosMusicales);



eventosMusicales.sort((a,b) => {
    return a.costo - b.costo;
});

console.log(eventosMusicales);



//Funcion ORDENAR
//  function ordenar() {
      
//  }

