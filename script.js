class Producto{
    constructor( nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }


    get_datos(){
        console.log("<----------->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }

    venta_stock( cantidad ){
        //CHEQUEO QUE LAS UNIDADES SEAN MENOR A LA CANTIDAD DE STOCK//
        if( this.stock >= cantidad ){
            this.stock = this.stock - cantidad
            return true
        }
        else{
            return false
        }

    }

}

//ALTA DE PRODUCTOS//

let lista_productos = [];

for( let i = 0 ; i < 3 ; i++){

    let nombre = prompt("Ingrese el nombre producto");
    let precio = prompt("Ingrese el precio del producto");
    let stock = prompt("Ingrese el stock del producto");


    let producto = new Producto( nombre , precio , stock);

    lista_productos.push(producto);
}

// INICIO RENDER DE PRODUCTOS //


for( let producto of lista_productos){
    producto.get_datos();
}


// PREGUNTO AL USUARIO QUE QUIERE COMPRAR //


let compra_usuario = prompt("Ingrese el nombre del producto que quiere comprar");


// BUSCO EL PRODUCTO

let resultado_busqueda = lista_productos.find( buscar_producto );

function buscar_producto( producto ){

    return producto.nombre == compra_usuario
}


// RESULTADO BUSQUEDA

 if( resultado_busqueda != undefined ){
    //SE ENCONTRO EL PRODUCTO QUE QUIERE COMPRAR EL USUARIO//
    console.log(resultado_busqueda);
 
   let unidades = prompt("¿Cuantas unidades queres?");

    if( resultado_busqueda.venta_stock( unidades) ){
        //CHEQUEO QUE LAS UNIDADES SEAN MENOR A LA CANTIDAD DE STOCK//
        console.log(`Gracias por comprar ${unidades}  unidades de ${resultado_busqueda.nombre}`);
        resultado_busqueda.get_datos();
    }
    else{
        console.log("No se puede realizar la compra, no tenemos tanto stock");
        console.log("Stock disponible: ", resultado_busqueda.stock );
    }

   
}



else{
    console.log("No se encontro el producto: ", compra_usuario);
}

