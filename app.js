// v1

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
            alert('Con pago a meses, te quedaria en:  3 meses = ' + costOnTreeMonths + ' o 6 meses = ' + costOnSixMonths);
            let monthsToPay = prompt('Seleccione los meses a pagar: (3) o (6):');
            alert(name + ' has comprado un boleto a' + monthsToPay + ' mensualidades de ' + cost / monthsToPay
                + ' y un total de ' + cost);
            buyAgain = prompt('Comprar otro boleto?? yes/no');
        } while (buyAgain == 'yes');
    }
    alert('¡Adios!');

    function showData(data){
        console.log(data);
    }