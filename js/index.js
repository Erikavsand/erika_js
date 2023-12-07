let enStock = propmpt("¿El producto esta disponible? contesta si o no");
let elEncargo = prompt("¿El encargo es para los proximos 10 dias? contesta si o no");

if(enStock ==="si" || elEncargo ==="si"){
    console.log("disponible")

}
else{
    console.log("no disponible")
}



const FECHA = prompt ("ingresar fecha de entrega");

if(isNaN(FECHA_NUMERO)){
    console.log("confirmar fecha con numero");
}else{
    if (FECHA_NUMERO >=10){
        console.log("no puede hacer su pedido")
    }else{
        console.log("puede hacer su pedido")
    }

    }


